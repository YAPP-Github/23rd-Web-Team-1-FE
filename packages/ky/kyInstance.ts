/* eslint-disable require-await */
import ky, { KyInstance, Options } from 'ky';
import { cookies } from 'next/headers';

const kyInstance = ky.create({
  retry: 0,
  credentials: 'include',
  timeout: 15_000,
  hooks: {
    beforeRequest: [
      (request) => {
        const cookieStore = cookies();
        const accessToken = cookieStore.get('accessToken')?.value;

        if (accessToken == null) {
          return;
        }

        request.headers.set('Authorization', `Bearer ${accessToken}`);
      },
    ],
    beforeError: [
      (error) => {
        const cookieStore = cookies();
        const accessToken = cookieStore.get('accessToken')?.value;

        if (accessToken != null && error.response?.status === 401) {
          cookieStore.delete('accessToken');
          cookieStore.delete('refreshToken');
        }

        return error;
      },
    ],
    afterResponse: [
      (_request, _option, response) => {
        // TODO(@useonglee): 토큰 로직 추가하기
      },
    ],
  },
});

export const prefix =
  process.env.NEXT_PUBLIC_MSW_MOCK === 'enabled'
    ? 'http://localhost:8000'
    : `${process.env.NEXT_PUBLIC_API_URL}/api`;

export const createKyApis = (instance: KyInstance) => ({
  get: async <T = unknown>(url: string, options?: Options) => {
    return instance
      .get(`${prefix}${url}`, options)
      .json<{ data: T }>()
      .then((data) => data.data);
  },
  post: async <T = unknown>(url: string, options?: Options) => {
    return instance
      .post(`${prefix}${url}`, options)
      .json<{ data: T }>()
      .then((data) => data.data);
  },
  put: async <T = unknown>(url: string, options?: Options) => {
    return instance
      .put(`${prefix}${url}`, options)
      .json<{ data: T }>()
      .then((data) => data.data);
  },
  delete: async <T = unknown>(url: string, options?: Options) => {
    return instance
      .delete(`${prefix}${url}`, options)
      .json<{ data: T }>()
      .then((data) => data.data);
  },
});

export default kyInstance;

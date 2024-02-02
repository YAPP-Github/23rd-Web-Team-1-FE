/* eslint-disable require-await */
import ky, { KyInstance, Options } from 'ky';
import { cookies } from 'next/headers';

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

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
    afterResponse: [
      async (request, _option, response) => {
        if (response.status === 403) {
          const cookieStore = cookies();
          const accessToken = cookieStore.get('accessToken')?.value;
          const refreshToken = cookieStore.get('refreshToken')?.value;

          const response: { data: Tokens } = await ky
            .post(`${prefix}/v1/auth/token/re-issue`, {
              json: {
                accessToken,
                refreshToken,
              },
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
            .json();

          cookieStore.set('accessToken', response.data.accessToken);
          cookieStore.set('refreshToken', response.data.refreshToken);

          return ky(request);
        }
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

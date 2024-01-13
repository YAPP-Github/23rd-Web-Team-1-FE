/* eslint-disable require-await */
import ky, { KyInstance, Options } from 'ky';

const MSW_MOCK_URL = 'http://localhost:8000';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const kyInstance = ky.create({
  retry: 0,
  credentials: 'include',
  timeout: 15_000,
  hooks: {
    beforeRequest: [
      (request) => {
        // TODO(@useonglee): 토큰 로직 추가하기
      },
    ],
  },
});

export const prefix = process.env.NEXT_PUBLIC_MSW_MOCK === 'enabled' ? MSW_MOCK_URL : API_URL;

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

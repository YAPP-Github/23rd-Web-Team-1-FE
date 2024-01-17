import { API_URL } from '@linker/ky';
import { DefaultBodyType, http, HttpResponse, PathParams, ResponseResolver } from 'msw';
import { HttpRequestResolverExtras } from 'msw/lib/core/handlers/HttpHandler';

type Resolver = ResponseResolver<HttpRequestResolverExtras<PathParams>> | DefaultBodyType;

type MockApi = Record<keyof typeof http, (endpoint: string, resolver: Resolver) => HttpResponse>;

const methods = Object.keys(http);

export const mockApi: MockApi = new Proxy({} as MockApi, {
  get(_target, key: keyof typeof http, _receiver) {
    if (!methods.includes(key)) {
      throw new Error('invalid method');
    }

    return (endpoint: string, resolver: Resolver) => {
      const url = `${API_URL}${endpoint}`;

      return http[key as keyof typeof http](url, (info) => {
        if (typeof resolver !== 'function') {
          return HttpResponse.json({ result: info });
        }

        return resolver(info);
      });
    };
  },
});

import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/test', () => {
    return HttpResponse.json({ result: true }, { status: 200 });
  }),
];

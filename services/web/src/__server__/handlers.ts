import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/test', async () => {
    return HttpResponse.json({ result: true }, { status: 200 });
  }),
];

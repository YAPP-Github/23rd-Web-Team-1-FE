import { http, HttpResponse } from 'msw';

export const cdnHandler = [
  http.get('https://static.im-linker.com/*', () => {
    return HttpResponse.json({ result: '' }, { status: 200 });
  }),
];

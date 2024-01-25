/* eslint-disable max-len */
import { http, HttpResponse } from 'msw';

import { MOCK_API_URL } from '../constants';

export const contactHandlers = [
  http.get(`${MOCK_API_URL}/v1/contacts`, () => {
    return HttpResponse.json({ data: contact }, { status: 200 });
  }),
];

export interface ContactData {
  id: number;
  name: string;
  profileImgUrl: string;
  job: string;
  association: string;
}
const contact: ContactData[] = [
  {
    id: 1,
    name: '윤대용',
    profileImgUrl:
      'https://postfiles.pstatic.net/MjAyMjA5MTdfMTE1/MDAxNjYzMzc3MDc1MTA2.bToArUww9E15OT_Mmt5mz7xAkuK98KGBbeI_dsJeaDAg.WJAhfo5kHehNQKWLEWKURBlZ7m_GZVZ9hoCBM2b_lL0g.JPEG.drusty97/IMG_0339.jpg?type=w966',
    job: '프론트앤드 개발자',
    association: 'Yapp23기 Web1팀',
  },
  {
    id: 2,
    name: '이우성',
    profileImgUrl:
      'https://postfiles.pstatic.net/MjAyMjA5MTdfMTE1/MDAxNjYzMzc3MDc1MTA2.bToArUww9E15OT_Mmt5mz7xAkuK98KGBbeI_dsJeaDAg.WJAhfo5kHehNQKWLEWKURBlZ7m_GZVZ9hoCBM2b_lL0g.JPEG.drusty97/IMG_0339.jpg?type=w966',
    job: '프론트앤드 개발자',
    association: 'Yapp23기 Web1팀',
  },
  {
    id: 3,
    name: '이정민',
    profileImgUrl:
      'https://postfiles.pstatic.net/MjAyMjA5MTdfMTE1/MDAxNjYzMzc3MDc1MTA2.bToArUww9E15OT_Mmt5mz7xAkuK98KGBbeI_dsJeaDAg.WJAhfo5kHehNQKWLEWKURBlZ7m_GZVZ9hoCBM2b_lL0g.JPEG.drusty97/IMG_0339.jpg?type=w966',
    job: '프론트앤드 개발자',
    association: 'Yapp23기 Web1팀',
  },
];

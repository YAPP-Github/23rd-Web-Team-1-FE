/* eslint-disable max-len */
import { http, HttpResponse } from 'msw';

import { MOCK_API_URL } from '../constants';

export const feedHandlers = [
  http.get(`${MOCK_API_URL}/v1/my`, () => {
    return HttpResponse.json({ data: my }, { status: 200 });
  }),

  http.get(`${MOCK_API_URL}/v1/schedules/near-term`, () => {
    return HttpResponse.json({ data: upcomingSchedules }, { status: 200 });
  }),

  http.get(`${MOCK_API_URL}/v1/schedules/upcoming/recommendation`, () => {
    return HttpResponse.json({ data: conversationRecommendation }, { status: 200 });
  }),
];

const my = {
  name: '김태준',
  profileImgUrl:
    'https://postfiles.pstatic.net/MjAyMjA5MTdfMTE1/MDAxNjYzMzc3MDc1MTA2.bToArUww9E15OT_Mmt5mz7xAkuK98KGBbeI_dsJeaDAg.WJAhfo5kHehNQKWLEWKURBlZ7m_GZVZ9hoCBM2b_lL0g.JPEG.drusty97/IMG_0339.jpg?type=w966',
  job: 'Json 상하차 담당',
  association: 'Yapp23기 Web1팀',
  email: 'rlaxowns7916@gmail.com',
  tags: [
    {
      id: 1,
      name: '스포츠',
    },
    {
      id: 2,
      name: '게임',
    },
  ],
  contactsNum: 0,
  scheduleNum: 0,
};

const upcomingSchedules = {
  schedules: [
    {
      scheduleId: 1,
      title: 'Yapp Design Study',
      profileImgUrl: 'https://static.im-linker.com/profile1.png',
      startDateTime: '2024-01-17T13:12:42.936Z',
      endDateTime: '2024-01-17T13:12:42.936Z',
    },
    {
      scheduleId: 2,
      title: '박지훈과 저녁식사',
      profileImgUrl: 'https://static.im-linker.com/profile2.png',
      startDateTime: '2024-01-17T13:12:42.936Z',
      endDateTime: '2024-01-17T13:12:42.936Z',
    },
    {
      scheduleId: 3,
      title: '기획전략팀 저녁 회식',
      profileImgUrl: null,
      startDateTime: '2024-01-17T13:12:42.936Z',
      endDateTime: '2024-01-17T13:12:42.936Z',
    },
  ],
};

const conversationRecommendation = {
  scheduleId: '49b258bc-7a6e-4ce5-9ce0-901abcb38485',
  title: '일정 1',
  profileImgUrl:
    'https://postfiles.pstatic.net/MjAyMjA5MTdfMTE1/MDAxNjYzMzc3MDc1MTA2.bToArUww9E15OT_Mmt5mz7xAkuK98KGBbeI_dsJeaDAg.WJAhfo5kHehNQKWLEWKURBlZ7m_GZVZ9hoCBM2b_lL0g.JPEG.drusty97/IMG_0339.jpg?type=w966',
  startTs: '2024-01-13 17:55:04',
  endTs: '2024-01-13 18:55:04',
  recommendations: [
    {
      tag: {
        id: 1,
        name: '스포츠',
      },
      contents: [
        {
          id: 1,
          title: '스포츠 뉴스',
          newsProvider: '연합뉴스',
          thumbnailUrl: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_600x600_kr01.jpg',
        },
      ],
    },
  ],
};

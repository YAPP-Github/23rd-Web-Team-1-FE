/* eslint-disable max-len */
import { http, HttpResponse } from 'msw';

import { MOCK_API_URL } from '../constants';

export interface TimelineRes {
  schedules: TimelineItemProps[];
}
export interface TimelineItemProps {
  scheduleId: number;
  title: string;
  profileImgUrl: string | null;
  startDateTime: string;
  endDateTime: string;
  color: string;
  member: MemberProps[] | null;
  description: string | null;
}

export const feedHandlers = [
  http.get(`${MOCK_API_URL}/v1/my`, () => {
    return HttpResponse.json({ data: my }, { status: 200 });
  }),

  http.get(`${MOCK_API_URL}/v1/schedules/near-term`, () => {
    return HttpResponse.json({ data: upcomingSchedules }, { status: 200 });
  }),
  // test2 인 이유는 또 msw 반영이 안돼서 입니다!
  http.get(`${MOCK_API_URL}/v1/schedules/near-term/test2`, () => {
    return HttpResponse.json({ data: upcomingSchedules }, { status: 200 });
  }),

  http.get(`${MOCK_API_URL}/v1/schedules/upcoming/recommendation`, () => {
    return HttpResponse.json({ data: conversationRecommendation }, { status: 200 });
  }),
  http.get(`${MOCK_API_URL}/v1/schedules/:scheduleId`, ({ params }) => {
    return HttpResponse.json({ data: scheduleDetail }, { status: 200 });
  }),
  http.get(`${MOCK_API_URL}/v1/schedules/search`, ({ request }) => {
    return HttpResponse.json({ data: upcomingSchedules }, { status: 200 });
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

const upcomingSchedules: TimelineRes = {
  schedules: [
    {
      scheduleId: 1,
      title: 'Yapp Design Study',
      profileImgUrl: 'https://static.im-linker.com/profile1.png',
      startDateTime: '2023-12-28T13:12:42.936Z',
      endDateTime: '2023-12-30T13:12:42.936Z',
      color: '#58DB67',
      member: [
        {
          memberId: 0,
          name: '이지우',
          profileImgUrl: 'https://static.im-linker.com/profile1.pn',
        },
      ],
      description:
        '선생님이 너무 친절하시고 프라이빗한 공간이라 친구와 함께 얘기하면서 즐겁게 체험즐겁게 체...',
    },
    {
      scheduleId: 2,
      title: '박지훈과 저녁식사',
      profileImgUrl: 'https://static.im-linker.com/profile2.png',
      startDateTime: '2024-01-11T13:12:42.936Z',
      endDateTime: '2024-01-12T13:12:42.936Z',
      color: '#26D1D1',
      member: null,
      description: null,
    },
    {
      scheduleId: 3,
      title: '기획전략팀 저녁 회식',
      profileImgUrl: null,
      startDateTime: '2024-01-13T13:12:42.936Z',
      endDateTime: '2024-01-14T13:12:42.936Z',
      color: '#FF70B0',
      member: [
        {
          memberId: 0,
          name: '이지우',
          profileImgUrl: 'https://static.im-linker.com/profile1.pn',
        },
        {
          memberId: 0,
          name: '이지우',
          profileImgUrl: 'https://static.im-linker.com/profile1.pn',
        },
      ],
      description:
        '선생님이 너무 친절하시고 프라이빗한 공간이라 친구와 함께 얘기하면서 즐겁게 체험즐겁게 체...',
    },
    {
      scheduleId: 4,
      title: 'Yapp Design Study',
      profileImgUrl: 'https://static.im-linker.com/profile1.png',
      startDateTime: '2024-01-15T13:12:42.936Z',
      endDateTime: '2024-01-16T13:12:42.936Z',
      color: '#58DB67',
      member: [
        {
          memberId: 0,
          name: '이지우',
          profileImgUrl: 'https://static.im-linker.com/profile1.pn',
        },
      ],
      description:
        '선생님이 너무 친절하시고 프라이빗한 공간이라 친구와 함께 얘기하면서 즐겁게 체험즐겁게 체...',
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

export interface MemberProps {
  memberId: number;
  name: string;
  profileImgUrl: string;
}
export interface ScheduleDetailProps {
  scheduleId: 1;
  title: string;
  profileImgUrl: string;
  startDateTime: string;
  endDateTime: string;
  hex: string;
  member: MemberProps[];
  memo: string;
}
const scheduleDetail: ScheduleDetailProps = {
  scheduleId: 1,
  title: 'Yapp Design Study',
  profileImgUrl: 'https://static.im-linker.com/profile1.png',
  startDateTime: '2024-01-15T13:12:42.936Z',
  endDateTime: '2024-01-16T13:12:42.936Z',
  hex: '#58DB67',
  member: [
    {
      memberId: 0,
      name: '이지우',
      profileImgUrl:
        'https://postfiles.pstatic.net/MjAyMjA5MTdfMTE1/MDAxNjYzMzc3MDc1MTA2.bToArUww9E15OT_Mmt5mz7xAkuK98KGBbeI_dsJeaDAg.WJAhfo5kHehNQKWLEWKURBlZ7m_GZVZ9hoCBM2b_lL0g.JPEG.drusty97/IMG_0339.jpg?type=w966',
    },
    {
      memberId: 1,
      name: '이지안',
      profileImgUrl:
        'https://postfiles.pstatic.net/MjAyMjA5MTdfMTE1/MDAxNjYzMzc3MDc1MTA2.bToArUww9E15OT_Mmt5mz7xAkuK98KGBbeI_dsJeaDAg.WJAhfo5kHehNQKWLEWKURBlZ7m_GZVZ9hoCBM2b_lL0g.JPEG.drusty97/IMG_0339.jpg?type=w966',
    },
  ],
  memo: '선생님이 너무 친절하시고 프라이빗한 공간이라 친구와 함께 얘기하면서 즐겁게 체험즐겁게 체...',
};

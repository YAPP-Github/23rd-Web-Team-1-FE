import { List } from '@linker/lds';
import Image from 'next/image';
import Link from 'next/link';

import Issue from './Issue';
import MoreButton from './MoreButton';

export const trends = [
  {
    tag: {
      id: 'tag-0',
      name: '전체주제',
    },
    news: [
      {
        id: 'news-0',
        title: '5G 스마트폰 이용자 과반 넘겨, 통신비 지출 4년 만에 소폭 감소',
        newsProvider: 'businesspost',
        thumbnailUrl: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_600x600_kr01.jpg',
      },
      {
        id: 'news-1',
        title: '송년회는 어디서...칵테일클래스 등 팝업스토어로 소비자와 소통 강화',
        newsProvider: '연합뉴스',
        thumbnailUrl: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_600x600_kr01.jpg',
      },
      {
        id: 'news-2',
        title: '올해 대주주 1만3쳔명 50억원으로 금ㅇ리 상향시 양도세 대상 70% 감소',
        newsProvider: '네이트 뉴스',
        thumbnailUrl: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_600x600_kr01.jpg',
      },
    ],
  },
  {
    tag: {
      id: 'tag-1',
      name: '엔터테인먼트',
    },
    news: [
      {
        id: 'news-3',
        title: '5G 스마트폰 이용자 과반 넘겨, 통신비 지출 4년 만에 소폭 감소',
        newsProvider: 'businesspost',
        thumbnailUrl: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_600x600_kr01.jpg',
      },
      {
        id: 'news-4',
        title: '송년회는 어디서...칵테일클래스 등 팝업스토어로 소비자와 소통 강화',
        newsProvider: '연합뉴스',
        thumbnailUrl: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_600x600_kr01.jpg',
      },
      {
        id: 'news-5',
        title: '올해 대주주 1만3쳔명 50억원으로 금ㅇ리 상향시 양도세 대상 70% 감소',
        newsProvider: '네이트 뉴스',
        thumbnailUrl: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_600x600_kr01.jpg',
      },
    ],
  },
  {
    tag: {
      id: 'tag-2',
      name: '스포츠',
    },
    news: [
      {
        id: 'news-6',
        title: '5G 스마트폰 이용자 과반 넘겨, 통신비 지출 4년 만에 소폭 감소',
        newsProvider: 'businesspost',
        thumbnailUrl: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_600x600_kr01.jpg',
      },
      {
        id: 'news-7',
        title: '송년회는 어디서...칵테일클래스 등 팝업스토어로 소비자와 소통 강화',
        newsProvider: '연합뉴스',
        thumbnailUrl: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_600x600_kr01.jpg',
      },
      {
        id: 'news-8',
        title: '올해 대주주 1만3쳔명 50억원으로 금ㅇ리 상향시 양도세 대상 70% 감소',
        newsProvider: '네이트 뉴스',
        thumbnailUrl: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_600x600_kr01.jpg',
      },
    ],
  },
  {
    tag: {
      id: 'tag-3',
      name: '비즈니스',
    },
    news: [
      {
        id: 'news-9',
        title: '5G 스마트폰 이용자 과반 넘겨, 통신비 지출 4년 만에 소폭 감소',
        newsProvider: 'businesspost',
        thumbnailUrl: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_600x600_kr01.jpg',
      },
      {
        id: 'news-10',
        title: '송년회는 어디서...칵테일클래스 등 팝업스토어로 소비자와 소통 강화',
        newsProvider: '연합뉴스',
        thumbnailUrl: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_600x600_kr01.jpg',
      },
      {
        id: 'news-11',
        title: '올해 대주주 1만3쳔명 50억원으로 금ㅇ리 상향시 양도세 대상 70% 감소',
        newsProvider: '네이트 뉴스',
        thumbnailUrl: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_600x600_kr01.jpg',
      },
    ],
  },
];

interface Tag {
  id: string;
  name: string;
}

export interface News {
  id: string;
  title: string;
  newsProvider: string;
  thumbnailUrl: string;
}

export interface TrendDTO {
  tag: Tag;
  news: News[];
}

function getTrendNews() {
  return new Promise<TrendDTO[]>((resolve) => {
    setTimeout(() => {
      resolve(trends);
    }, 500);
  });
}

async function Trend() {
  const trends = await getTrendNews();

  return (
    <List>
      <Link href="">
        <List.Header
          title="트렌드 핫 이슈"
          rightAddon={
            <button type="button">
              <Image
                src="https://static.im-linker.com/right-arrow-mono.png"
                alt=""
                width={28}
                height={28}
              />
            </button>
          }
        />
        <Issue trends={trends} />
        <MoreButton />
      </Link>
    </List>
  );
}

export default Trend;

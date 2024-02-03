import { ky } from '@linker/ky';
import { List, Carousel, CarouselItem } from '@linker/lds';
import Image from 'next/image';
import Link from 'next/link';

import { getTokens } from '@utils/token/server';

import News from './News';
import { wrapper, header, schedule, newsItem } from './Recommendation.css';
import Schedule from './Schedule';

export interface NewsDTO {
  tag: {
    id: number;
    name: string;
  };
  contents: Array<{
    id: number;
    title: string;
    newsProvider: string;
    thumbnailUrl: string;
  }>;
}

interface RecommendationDTO {
  id: number;
  title: string;
  profileImgUrl: string;
  startDateTime: string;
  endDateTime: string;
  recommendations: NewsDTO[];
}

const getRecommendation = () => {
  return ky.get<RecommendationDTO>('/v1/schedules/upcoming/recommendation');
};

async function Recommendation() {
  const accessToken = getTokens().accessToken;

  if (accessToken == null) {
    return;
  }

  const { title, profileImgUrl, startDateTime, endDateTime, recommendations } =
    await getRecommendation();

  return (
    <List className={wrapper}>
      <div className={header}>
        {/* @todo 일정상세페이지 href 추가필요 */}
        <Link href="">
          <List.Header
            title="대화 주제 추천 받기"
            typograyphy="h7"
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
        </Link>
      </div>
      <div className={schedule}>
        <Schedule
          title={title}
          profileImgUrl={profileImgUrl}
          startDateTime={startDateTime}
          endDateTime={endDateTime}
        />
      </div>
      <Carousel>
        {recommendations.map(({ tag, contents }, index) => (
          <CarouselItem key={index} className={newsItem}>
            <News tag={tag} contents={contents} />
          </CarouselItem>
        ))}
      </Carousel>
    </List>
  );
}

export default Recommendation;

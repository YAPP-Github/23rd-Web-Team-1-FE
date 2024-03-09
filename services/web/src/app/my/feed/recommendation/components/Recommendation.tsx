import { NewsDTO } from '@/types/news';
import { TagDTO } from '@/types/tag';
import { ky } from '@linker/ky';
import { List, Carousel, CarouselItem, Icon } from '@linker/lds';
import Link from 'next/link';

import { getTokens } from '@utils/token/server';

import News from './News';
import { wrapper, header, schedule, newsItem } from './Recommendation.css';
import Schedule from './Schedule';

export interface RecommendationDTO {
  id: number;
  title: string;
  profileImgUrl?: string;
  startDateTime: string;
  endDateTime: string;
  recommendations: Array<{
    tags: TagDTO[];
    newsList: {
      data: NewsDTO[];
      nextCursor: number | null;
      hasNext: boolean;
    };
  }>;
}

const getRecommendation = (size = 3) => {
  return ky.get<RecommendationDTO>(`/v1/schedules/upcoming/recommendation?size=${size}`);
};

async function Recommendation() {
  const accessToken = getTokens().accessToken;

  if (accessToken == null) {
    return;
  }

  const result = await getRecommendation();

  if (!result) {
    return null;
  }

  const { title, profileImgUrl, startDateTime, endDateTime, recommendations } = result;

  return (
    <List className={wrapper}>
      <Link href={'/recommendation'}>
        <List.Header
          title="대화 주제 추천 받기"
          className={header}
          typograyphy="h7"
          rightAddon={
            <button type="button">
              <Icon name="next-gray" size={24} />
            </button>
          }
        />
      </Link>

      <div className={schedule}>
        <Schedule
          title={title}
          profileImgUrl={profileImgUrl}
          startDateTime={startDateTime}
          endDateTime={endDateTime}
        />
      </div>
      <Carousel>
        {recommendations.map(({ tags, newsList }, index) => (
          <CarouselItem key={index} className={newsItem}>
            <News tag={tags[0]} newsList={newsList.data} />
          </CarouselItem>
        ))}
      </Carousel>
    </List>
  );
}

export default Recommendation;

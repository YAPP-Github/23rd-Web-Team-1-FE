import { NewsDTO } from '@/types/news';
import { TagDTO } from '@/types/tag';
import { NewsList } from '@features/news-list';
import { ky } from '@linker/ky';
import { List, Icon, BackHeader, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { redirect } from 'next/navigation';

import { getTokens } from '@utils/token/server';

import { scheduleWrapper, sideBar, scheduleInfo, infoItem } from './page.css';

export interface RecommendationDTO {
  id: number;
  title: string;
  profileImgUrl: string;
  startDateTime: string;
  endDateTime: string;
  participantsSummary: string;
  recommendations: Array<{
    tags: TagDTO[];
    newsList: {
      data: NewsDTO[];
      nextCursor: number | null;
      hasNext: boolean;
    };
  }>;
}

const getRecommendation = () => {
  return ky.get<RecommendationDTO>('/v1/schedules/upcoming/recommendation');
};

async function RecommendationPage() {
  const accessToken = getTokens().accessToken;

  if (accessToken == null) {
    return;
  }

  const result = await getRecommendation();

  if (!result) {
    return redirect('/my/feed');
  }

  const { title, startDateTime, endDateTime, recommendations, participantsSummary } = result;

  return (
    <>
      <BackHeader title="대화 주제 추천 받기" />
      <List className={scheduleWrapper}>
        <div className={sideBar} />
        <div className={scheduleInfo}>
          <Txt typography="p1">{title}</Txt>
          <div className={infoItem}>
            <Icon name="time-gray" size={18} />
            <Txt typography="p3" color={colors.gray700}>
              {`${format(startDateTime, 'a hh:mm', { locale: ko })} - ${format(endDateTime, 'a hh:mm', { locale: ko })}`}
            </Txt>
          </div>
          <div className={infoItem}>
            <Icon name="user" size={18} />
            <Txt typography="p3" color={colors.gray700}>
              {participantsSummary}
            </Txt>
          </div>
        </div>
      </List>
      {recommendations.length > 0 && <NewsList recommendations={recommendations} />}
    </>
  );
}

export default RecommendationPage;

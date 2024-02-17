import { getRecommendation } from '@/app/my/feed/recommendation/components/Recommendation';
import { NewsList } from '@features/news-list';
import { List, Icon, BackHeader, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

import { getTokens } from '@utils/token/server';

import { recommendations } from './__mock__';
import { scheduleWrapper, sideBar, scheduleInfo, infoItem } from './page.css';

async function RecommendationPage() {
  const accessToken = getTokens().accessToken;

  if (accessToken == null) {
    return;
  }

  const { title, startDateTime, endDateTime, /* recommendations */ participantsSummary } =
    await getRecommendation();

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
      <NewsList recommendations={recommendations} />
    </>
  );
}

export default RecommendationPage;

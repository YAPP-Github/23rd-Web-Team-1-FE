import { getTokens } from '@utils/token/server';

import { ContactBanner } from './contact-banner';
import { wrapper } from './page.css';
import { PreviousSchedule } from './previous-schedule';
import { Recommendation } from './recommendation';
import { Trend } from './trend';
import { UpcomingSchedule } from './upcoming-schedule';

export default function FeedPage() {
  const { accessToken } = getTokens();

  return (
    <article className={wrapper}>
      {accessToken != null && <ContactBanner />}
      <UpcomingSchedule />
      <Recommendation />
      <PreviousSchedule />
      <Trend />
    </article>
  );
}

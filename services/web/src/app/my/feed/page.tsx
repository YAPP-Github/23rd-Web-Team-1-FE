import { wrapper } from './page.css';
import { PreviousSchedule } from './previous-schedule';
import { Recommendation } from './recommendation';
import { Trend } from './trend';
import { UpcomingSchedule } from './upcoming-schedule';

export default function FeedPage() {
  return (
    <article className={wrapper}>
      <UpcomingSchedule />
      <Recommendation />
      <PreviousSchedule />
      <Trend />
    </article>
  );
}

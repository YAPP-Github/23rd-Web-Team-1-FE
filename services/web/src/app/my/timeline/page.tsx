import { getPrevTimeline, getUpcomingTimeline } from '@api/timeline';

import TimelineDefault from './component/TimelineDefault/TimelineDefault';

export default async function TimelinePage() {
  const prevData = await getPrevTimeline();
  const upcomingData = await getUpcomingTimeline();

  return (
    <>
      <TimelineDefault prevData={prevData} upcomingData={upcomingData} />
    </>
  );
}

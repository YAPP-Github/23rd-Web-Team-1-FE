import { ky } from '@linker/ky';

import TimelineDefault from './component/TimelineDefault/TimelineDefault';
import { TimelineRes } from './types/schedule';

export default async function TimelinePage() {
  const timelineData = await getTimeline();

  return <TimelineDefault schedules={timelineData.schedules} />;
}

const getTimeline = () => {
  const response = ky.get<TimelineRes>('/v1/schedules/near-term?limit=32&type=UPCOMING');

  return response;
};

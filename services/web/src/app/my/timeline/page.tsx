import { TimelineRes } from '@__server__/mocks/feed';
import { ky } from '@linker/ky';

import TimelineDefault from './component/TimelineDefault/TimelineDefault';

export default async function TimelinePage() {
  const timelineItemsData = await getTimeline();

  return <TimelineDefault timelineItems={timelineItemsData} />;
}

const getTimeline = () => {
  const response = ky.get<TimelineRes>('/v1/schedules/near-term?limit=32&type=PREV');

  return response;
};

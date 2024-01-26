import { TimelineRes } from '@__server__/mocks/feed';
import { ky } from '@linker/ky';

import Feed from './Feed';

export default async function TimelinePage() {
  const timelineItemsData = await getTimeline();

  return (
    <div>
      <Feed timelineItems={timelineItemsData} />
    </div>
  );
}

const getTimeline = () => {
  const response = ky.get<TimelineRes>('/v1/schedules/near-term');

  return response;
};

/*

@todo: 특정 날짜의 일정 가져오기
const getTimeItem = () => {};
 */

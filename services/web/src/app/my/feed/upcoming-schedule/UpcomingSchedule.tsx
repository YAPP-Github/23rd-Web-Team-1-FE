import { ky } from '@linker/ky';
import { List } from '@linker/lds';
import Link from 'next/link';

import ScheduleItem from './ScheduleItem';
import type { Schedule } from './ScheduleItem'
import { listWrapper, listItem } from './UpcomingSchedule.css'

const getUpcomingSchedule = ({ limit }: { limit: number }) => {
  return ky.get<{
    schedules: Schedule[];
  }>(`/v1/schedules/near-term?type=UPCOMING&limit=${limit}`);
};

async function UpcomingSchedule() {
  const { schedules } = await getUpcomingSchedule({ limit: 3 });

  return (
    <List className={listWrapper}>
      <List.Header
        title="다가오는 일정 확인하기"
        description="예정된 일정의 관심 대화주제를 확인해보세요"
      />
      {schedules.map(schedule => (
        <Link
          /** @todo 일정상세페이지 href 추가필요 */
          href=""
          key={schedule.scheduleId}
          className={listItem}
        >
          <List.Row
            content={
              <ScheduleItem schedule={schedule} />
            }
            withArrow
          />
        </Link>
      ))}
    </List>
  );
}

export default UpcomingSchedule;

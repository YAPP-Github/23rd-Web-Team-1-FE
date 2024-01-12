import { getUpcomingSchedule } from '@/app/my/feed/(api)/feedAPI'
import { List, ListHeader, ListRow } from '@linker/lds';
import Link from 'next/link';

import ScheduleItem from './ScheduleItem';
import { listWrapper, listItem } from './UpcomingSchedule.css'

async function UpcomingSchedule() {
  const upcomingSchedule = await getUpcomingSchedule({ limit: 3 });

  return (
    <List className={listWrapper}>
      <ListHeader
        title="다가오는 일정 확인하기"
        description="예정된 일정의 관심 대화주제를 확인해보세요"
      />
      {upcomingSchedule.map(schedule => (
        <Link
          /** @todo 일정상세페이지 href 추가필요 */
          href=""
          key={schedule.scheduleId}
          className={listItem}
        >
          <ListRow
            content={
              <ScheduleItem
                schedule={schedule}
                /** @todo 참여자가 여러명인지 여부에 대한 플래그 설정 필요 */
                isGroupSchedule={false}
              />
            }
            withArrow
          />
        </Link>
      ))}
    </List>
  );
}

export default UpcomingSchedule;

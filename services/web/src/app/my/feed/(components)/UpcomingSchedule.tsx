import { getUpcomingSchedule } from '@/app/my/feed/(api)/feedAPI'
import { List, ListHeader, ListRow } from '@linker/lds';

import ScheduleItem from './ScheduleItem';

async function UpcomingSchedule() {
  const upcomingSchedule = await getUpcomingSchedule({ limit: 3 });

  return (
    <List>
      <ListHeader
        title="다가오는 일정 확인하기"
        description="예정된 일정의 관심 대화주제를 확인해보세요"
      />
      {upcomingSchedule.map(schedule => (
        <ListRow
          key={schedule.scheduleId}
          content={<ScheduleItem schedule={schedule} />}
          withArrow
        />
      ))}
    </List>
  );
}

export default UpcomingSchedule;

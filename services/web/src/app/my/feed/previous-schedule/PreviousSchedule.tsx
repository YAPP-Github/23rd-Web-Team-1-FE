import { ky } from '@linker/ky';
import { List } from '@linker/lds';

import { wrapper, header, scheduleList } from './PreviousSchedule.css';
import ScheduleCard from './ScheduleCard';

interface Schedule {
  scheduleId: number;
  title: string;
  startDateTime: string;
  endDateTime: string;
  profileImgUrl: string | null;
}

const getPreviousSchedules = ({ limit }: { limit: number }) => {
  return ky.get<{
    schedules: Schedule[];
  }>(`/v1/schedules/near-term?type=PREV&limit=${limit}`);
};

async function PreviousSchedule() {
  const previousSchedules = await getPreviousSchedules({ limit: 5 });

  return (
    <List className={wrapper}>
      <List.Header className={header} title="지난 일정을 노트로 기록해보세요!" />
      <ul className={scheduleList}>
        {previousSchedules.schedules.map(({ scheduleId, title, endDateTime }) => (
          <ScheduleCard key={scheduleId} title={title} endDateTime={endDateTime} />
        ))}
      </ul>
    </List>
  );
}

export default PreviousSchedule;

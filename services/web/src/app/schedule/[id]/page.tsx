import { TimelineItemProps } from '@app/my/timeline/types/schedule';
import { ky } from '@linker/ky';

import { Schedule } from '../component/Schedule/Schedule';

export default async function SchedulePage({
  params,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const scheduleData = await getScheduleById(parseInt(params.id));

  return (
    <>
      {scheduleData && (
        <Schedule
          scheduleId={scheduleData.scheduleId}
          profileImgUrl={scheduleData.profileImgUrl}
          title={scheduleData.title}
          startDateTime={scheduleData.startDateTime}
          endDateTime={scheduleData.endDateTime}
          color={scheduleData.color}
          contacts={scheduleData.contacts}
          description={scheduleData.description}
        />
      )}
    </>
  );
}

const getScheduleById = (scheduleId: number) => {
  return ky.get<TimelineItemProps>(`/v1/schedules/${scheduleId}`);
};

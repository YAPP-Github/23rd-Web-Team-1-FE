'use client';
import { useGetSchedule } from '@app/my/timeline/hooks/useGetSchedule';

import { Schedule } from '../component/Schedule/Schedule';

export default function SchedulePage({
  params,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const scheduleData = useGetSchedule(parseInt(params.id)).data;

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

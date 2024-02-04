import { TimelineItemProps } from '@__server__/mocks/feed';
import { ky } from '@linker/ky';

import { Schedule } from '../component/Schedule/Schedule';

export default async function SchedulePage({
  params,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const scheduleData = await getSchedule(parseInt(params.id));

  return (
    <Schedule
      scheduleId={scheduleData.scheduleId}
      profileImgUrl={scheduleData.profileImgUrl}
      title={scheduleData.title}
      startDateTime={scheduleData.startDateTime}
      endDateTime={scheduleData.endDateTime}
      member={scheduleData.member}
      color={scheduleData.color}
      description={scheduleData.description}
    />
  );
}

const getSchedule = async (scheduleId: number) => {
  const response = await ky.get<TimelineItemProps>(`/v1/schedules/${scheduleId}`);

  return response;
};

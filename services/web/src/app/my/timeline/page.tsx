'use client';

import TimelineDefault from './component/TimelineDefault/TimelineDefault';
import { useGetPrevSchedule, useGetUpComingSchedule } from './hooks/useGetNearSchedule';

export default function TimelinePage() {
  const { data: prevData } = useGetPrevSchedule();
  const { data: upcomingData } = useGetUpComingSchedule();

  return (
    <TimelineDefault
      prevSchedules={prevData.schedules}
      upcomingSchedules={upcomingData.schedules}
    />
  );
}

'use client';

import TimelineDefault from './component/TimelineDefault/TimelineDefault';
import { useGetNearSchedule } from './hooks/useGetNearSchedule';

export default function TimelinePage() {
  const { data: prevData } = useGetNearSchedule('PREV');
  const { data: upcomingData } = useGetNearSchedule('UPCOMING');

  return (
    <TimelineDefault
      prevSchedules={prevData.schedules}
      upcomingSchedules={upcomingData.schedules}
    />
  );
}

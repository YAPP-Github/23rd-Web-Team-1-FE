'use client';

import TimelineDefault from './component/TimelineDefault/TimelineDefault';
import TimelineNull from './component/TimelineNull/TimelineNull';
import { useGetPrevSchedule, useGetUpComingSchedule } from './hooks/useGetNearSchedule';

export default function TimelinePage() {
  const { data: prevData } = useGetPrevSchedule();
  const { data: upcomingData } = useGetUpComingSchedule();
  const concatSchedules = [];

  concatSchedules.push(prevData.schedules);
  concatSchedules.push(upcomingData.schedules);

  const uniqueSchedules = [...new Set(concatSchedules)];

  return (
    <>
      {uniqueSchedules.length === 0 ? (
        <TimelineNull />
      ) : (
        <TimelineDefault concatSchedules={uniqueSchedules[0]} />
      )}
    </>
  );
}

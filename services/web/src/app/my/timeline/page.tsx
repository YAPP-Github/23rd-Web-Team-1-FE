'use client';
import TimelineDefault from './component/TimelineDefault/TimelineDefault';
import { useGetNearSchedule } from './hooks/useGetNearSchedule';

export default function TimelinePage() {
  const { data } = useGetNearSchedule();

  return <>{data && <TimelineDefault schedules={data.schedules} />}</>;
}

'use client';

import TimelineSearch from '../component/TimelineSearch/TimelineSearch';
import { useGetSearchSchedule } from '../hooks/useGetSearchSchedule';

export type SearchParamsProps = {
  from: string;
  to: string;
  limit: number;
};

export default function TimelineSearchPage({ searchParams }: { searchParams: SearchParamsProps }) {
  const { data } = useGetSearchSchedule(searchParams.from, searchParams.to, searchParams.limit);

  return <TimelineSearch schedules={data?.schedules} />;
}

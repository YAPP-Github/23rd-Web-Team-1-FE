import { ky } from '@linker/ky';

import TimelineSearch from '../component/TimelineSearch/TimelineSearch';
import { TimelineRes } from '../types/schedule';

export type SearchParamsProps = {
  from: string;
  to: string;
  limit: number;
};

export default async function TimelineSearchPage({
  searchParams,
}: {
  searchParams: SearchParamsProps; // 수정된 부분
}) {
  const timelineSearchData = await getScheduleByDay(
    searchParams.from,
    searchParams.to,
    searchParams.limit,
  );

  return <TimelineSearch schedules={timelineSearchData.schedules} />;
}

const getScheduleByDay = async (from: string, to: string, limit: number) => {
  const response = await ky.get<TimelineRes>(
    `/v1/schedules/search?from=${from}&to=${to}&limit=${limit}`,
  );

  return response;
};

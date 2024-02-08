import { TimelineRes } from '@__server__/mocks/feed';
import { ky } from '@linker/ky';

import TimelineSearch from '../component/TimelineSearch/TimelineSearch';

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

  return <TimelineSearch timelineItems={timelineSearchData} />;
}

const getScheduleByDay = async (from: string, to: string, limit: number) => {
  const response = await ky.get<TimelineRes>(
    `/v1/schedules/search?from=${from}&to=${to}&limit=${limit}`,
  );

  return response;
};

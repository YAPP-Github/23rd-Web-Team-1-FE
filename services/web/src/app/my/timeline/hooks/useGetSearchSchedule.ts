'use client';
import { kyClient } from '@linker/ky';
import { useQuery } from '@tanstack/react-query';

import { GetTimelineRes } from '../types/schedule';

const getSearchSchedule = (from: string, to: string, limit: number) => {
  const response = kyClient.get<GetTimelineRes>(
    `/v1/schedules/search?from=${from}&to=${to}&limit=${limit}`,
  );

  return response;
};

const useGetSearchSchedule = (from: string, to: string, limit: number) => {
  return useQuery<GetTimelineRes>({
    queryKey: ['schedule', from, to, limit],
    queryFn: () => getSearchSchedule(from, to, limit),
  });
};

export { useGetSearchSchedule, getSearchSchedule };

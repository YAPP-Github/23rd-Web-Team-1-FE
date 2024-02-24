'use client';
import { getSearchSchedule } from '@api/timeline';
import { useSuspenseQuery } from '@tanstack/react-query';

import { GetTimelineRes } from '../types/schedule';

const useGetSearchSchedule = (from: string, to: string, limit: number) => {
  return useSuspenseQuery<GetTimelineRes>({
    queryKey: useGetSearchSchedule.getKey(from, to, limit),
    queryFn: () => getSearchSchedule(from, to, limit),
  });
};

useGetSearchSchedule.getKey = (from: string, to: string, limit: number) => {
  return ['schedule', from, to, limit];
};

export { useGetSearchSchedule, getSearchSchedule };

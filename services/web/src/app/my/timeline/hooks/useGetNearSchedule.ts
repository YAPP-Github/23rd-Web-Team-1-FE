'use client';
import { kyClient } from '@linker/ky';
import { useSuspenseQuery } from '@tanstack/react-query';

import { GetTimelineRes } from '../types/schedule';

const getNearTimeline = (type: string) => {
  const res = kyClient.get<GetTimelineRes>(`/v1/schedules/near-term?limit=32&type=${type}`);

  return res;
};

const useGetNearSchedule = (type: string) => {
  return useSuspenseQuery<GetTimelineRes>({
    queryKey: useGetNearSchedule.getKey(type),
    queryFn: () => getNearTimeline(type),
  });
};

useGetNearSchedule.getKey = (type: string) => {
  return ['/api/v1/schedules/near-term'];
};

export { useGetNearSchedule, getNearTimeline };

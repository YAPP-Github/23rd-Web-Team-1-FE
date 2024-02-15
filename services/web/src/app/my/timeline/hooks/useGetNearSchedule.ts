'use client';
import { kyClient } from '@linker/ky';
import { useSuspenseQuery } from '@tanstack/react-query';

import { GetTimelineRes } from '../types/schedule';

const getNearTimeline = () => {
  const res = kyClient.get<GetTimelineRes>('/v1/schedules/near-term?limit=32&type=UPCOMING');

  return res;
};

const useGetNearSchedule = () => {
  return useSuspenseQuery<GetTimelineRes>({
    queryKey: useGetNearSchedule.getKey(),
    queryFn: () => getNearTimeline(),
  });
};

useGetNearSchedule.getKey = () => {
  return ['/api/v1/schedules/near-term'];
};

export { useGetNearSchedule, getNearTimeline };

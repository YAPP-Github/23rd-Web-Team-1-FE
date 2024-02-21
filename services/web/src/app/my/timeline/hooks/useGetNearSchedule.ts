'use client';
import { kyClient } from '@linker/ky';
import { useSuspenseQuery } from '@tanstack/react-query';

import { GetTimelineRes } from '../types/schedule';

const getPrevTimeline = () => {
  const res = kyClient.get<GetTimelineRes>('/v1/schedules/near-term?limit=32&type=PREV');

  return res;
};
const getUpcomingTimeline = () => {
  const res = kyClient.get<GetTimelineRes>('/v1/schedules/near-term?limit=32&type=UPCOMING');

  return res;
};

const useGetPrevSchedule = () => {
  return useSuspenseQuery<GetTimelineRes>({
    queryKey: useGetPrevSchedule.getKey(),
    queryFn: () => getPrevTimeline(),
  });
};
const useGetUpComingSchedule = () => {
  return useSuspenseQuery<GetTimelineRes>({
    queryKey: useGetUpComingSchedule.getKey(),
    queryFn: () => getUpcomingTimeline(),
  });
};

useGetPrevSchedule.getKey = () => {
  return ['/api/v1/schedules/near-term'];
};
useGetUpComingSchedule.getKey = () => {
  return ['/api/v1/schedules/near-term'];
};

export { useGetPrevSchedule, useGetUpComingSchedule };

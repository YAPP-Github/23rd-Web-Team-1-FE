import { getPrevTimeline, getUpcomingTimeline } from '@api/timeline';
import { useSuspenseQuery } from '@tanstack/react-query';

import { GetTimelineRes } from '../types/schedule';

const useGetPrevSchedule = (data: GetTimelineRes) => {
  return useSuspenseQuery<GetTimelineRes>({
    queryKey: useGetPrevSchedule.getKey(),
    queryFn: () => getPrevTimeline(),
    initialData: data,
  });
};
const useGetUpComingSchedule = (data: GetTimelineRes) => {
  return useSuspenseQuery<GetTimelineRes>({
    queryKey: useGetUpComingSchedule.getKey(),
    queryFn: () => getUpcomingTimeline(),
    initialData: data,
  });
};

useGetPrevSchedule.getKey = () => {
  return ['/api/v1/schedules/near-term'];
};
useGetUpComingSchedule.getKey = () => {
  return ['/api/v1/schedules/near-term/upcoming'];
};

export { useGetPrevSchedule, useGetUpComingSchedule };

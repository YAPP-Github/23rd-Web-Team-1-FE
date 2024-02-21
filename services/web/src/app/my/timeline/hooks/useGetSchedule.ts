'use client';
import { kyClient } from '@linker/ky';
import { useSuspenseQuery } from '@tanstack/react-query';

import { TimelineItemProps } from '../types/schedule';

const getScheduleById = (scheduleId: number) => {
  return kyClient.get<TimelineItemProps>(`/v1/schedules/${scheduleId}`);
};

const useGetSchedule = (id: number) => {
  return useSuspenseQuery<TimelineItemProps>({
    queryKey: useGetSchedule.getKey(id),
    queryFn: () => getScheduleById(id),
  });
};

useGetSchedule.getKey = (id: number) => {
  return ['/api/v1/schedules', id];
};

export { useGetSchedule, getScheduleById };

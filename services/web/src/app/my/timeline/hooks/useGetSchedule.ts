'use client';
import { kyClient } from '@linker/ky';
import { useQuery } from '@tanstack/react-query';

import { TimelineItemProps } from '../types/schedule';

const getScheduleById = (scheduleId: number) => {
  return kyClient.get<TimelineItemProps>(`/v1/schedules/${scheduleId}`);
};

const useGetSchedule = (id: number) => {
  return useQuery<TimelineItemProps>({
    queryKey: ['schedule', id],
    queryFn: () => getScheduleById(id),
  });
};

export { useGetSchedule, getScheduleById };

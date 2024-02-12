'use server';
import { ky } from '@linker/ky';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const deleteSchedule = (scheduleId: number) => {
  return ky.delete(`/v1/schedules/${scheduleId}`);
};

export const useDeleteSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (scheduleId: number) => deleteSchedule(scheduleId),
    onSuccess: (_, scheduleId: number) => {
      queryClient.invalidateQueries({ queryKey: ['schedule', scheduleId] });
    },
  });
};

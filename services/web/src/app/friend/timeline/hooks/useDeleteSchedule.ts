'use client';
import { kyClient } from '@linker/ky';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const deleteSchedule = (scheduleId: number) => {
  return kyClient.delete(`/v1/schedules/${scheduleId}`);
};

const useDeleteSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (scheduleId: number) => deleteSchedule(scheduleId),
    onSuccess: (_, scheduleId: number) => {
      queryClient.invalidateQueries({ queryKey: useDeleteSchedule.getKey() });
    },
  });
};

useDeleteSchedule.getKey = () => {
  return ['/api/v1/contacts/schedules/near-term'];
};
export { useDeleteSchedule, deleteSchedule };

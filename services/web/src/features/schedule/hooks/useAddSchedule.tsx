import { SchedulePayload } from '@/types/schedule';
import { kyClient } from '@linker/ky';
import { useMutation } from '@tanstack/react-query';

const postAddSchedule = (payload: SchedulePayload) => {
  const response = kyClient.post('/v1/schedules', {
    json: payload,
  });

  return response;
};

const useAddSchedule = () => {
  return useMutation({
    mutationFn: (payload: SchedulePayload) => postAddSchedule(payload),
  });
};

export default useAddSchedule;

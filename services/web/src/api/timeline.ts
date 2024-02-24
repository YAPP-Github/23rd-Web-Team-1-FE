import { GetTimelineRes } from '@app/friend/timeline/types/schedule';
import { ky } from '@linker/ky';

export const getPrevTimeline = () => {
  const res = ky.get<GetTimelineRes>('/v1/schedules/near-term?limit=32&type=PREV');

  return res;
};
export const getUpcomingTimeline = () => {
  const res = ky.get<GetTimelineRes>('/v1/schedules/near-term?limit=32&type=UPCOMING');

  return res;
};

export const getSearchSchedule = (from: string, to: string, limit: number) => {
  const response = ky.get<GetTimelineRes>(
    `/v1/schedules/search?from=${from}&to=${to}&limit=${limit}`,
  );

  return response;
};

import { ky } from '@linker/ky';

export const getUpcomingSchedule = ({ limit }: { limit: number }) => {
  return ky.get<{
    schedules: Array<{
      scheduleId: number;
      title: string;
      startDateTime: string;
      endDateTime: string;
      profileImgUrl: string | null;
    }>;
  }>(`/v1/schedules/near-term?type=UPCOMING&limit=${limit}`);
};

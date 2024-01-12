// import ky from 'ky';
import { upcomingSchedules } from './__mock__';

/**
 * @todo global context로 이동 필요
 */
export type Schedule = {
  scheduleId: number;
  title: string;
  startDatetime: string;
  endDatetime: string;
  profileUrl: string;
};

type GetUpcomingScheduleArgs = {
  limit: number;
};

type GetUpcomingScheduleDTO = Schedule[];

export const getUpcomingSchedule = ({ limit }: GetUpcomingScheduleArgs) => {
  // return ky.get(`/schedules?limit=${limit}`);
  return new Promise<GetUpcomingScheduleDTO>((resolve) => {
    setTimeout(() => resolve(upcomingSchedules.slice(0, limit)), 300);
  });
};

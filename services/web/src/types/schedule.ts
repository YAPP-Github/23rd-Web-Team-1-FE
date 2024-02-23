import { Category, CategoryColor } from '@features/schedule/constants';

export interface Schedule {
  scheduleId: number;
  title: string;
  startDateTime: string;
  endDateTime: string;
  profileImgUrl: string | null;
}

export interface SchedulePayload {
  title: string;
  startDateTime: string;
  endDateTime: string;
  description: string;
  contactIds: number[];
  category: Category;
  color: CategoryColor;
}

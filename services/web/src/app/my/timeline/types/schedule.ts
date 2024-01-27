export interface TimelineRes {
  schedules: TimelineItemProps[];
}
export interface TimelineItemProps {
  scheduleId: number;
  title: string;
  profileImgUrl: string | null;
  startDateTime: string;
  endDateTime: string;
  hex: string;
  member: string | string[] | null;
  memo: string | null;
}

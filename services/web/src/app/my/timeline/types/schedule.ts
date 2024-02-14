export interface GetTimelineRes {
  schedules: TimelineItemProps[];
}
export interface DeleteScheduleRes {
  responseType: string | null;
  data: string | null;
  error: null;
  debug: null;
}

export interface ContactsProps {
  contactId: number;
  name: string;
  profileImgUrl: string;
}
export interface TimelineItemProps {
  scheduleId: number;
  title: string;
  profileImgUrl: string;
  startDateTime: string;
  endDateTime: string;
  color: string;
  contacts: ContactsProps[] | null;
  description: string | null;
}

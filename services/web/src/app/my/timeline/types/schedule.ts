export interface TimelineRes {
  schedules: TimelineItemProps[];
}

export interface ContactsProps {
  contactId: number;
  name: string;
  profileImgUrl: string;
}
export interface TimelineItemProps {
  scheduleId: number;
  title: string;
  profileImgUrl: string | null;
  startDateTime: string;
  endDateTime: string;
  color: string;
  contacts: ContactsProps[] | null;
  description: string | null;
}

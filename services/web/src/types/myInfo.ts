export interface MyInfo {
  name: string;
  profileImgUrl: string;
  email: string;
  interests: Array<{ id: number; name: string }>;
  contactsNum: number;
  scheduleNum: number;
}

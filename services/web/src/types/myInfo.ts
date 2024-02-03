export interface MyInfo {
  name: string;
  profileImgUrl: string;
  email: string;
  interests: MyInfoInterest[];
  contactsNum: number;
  scheduleNum: number;
}

export interface MyInfoInterest {
  id: number;
  name: string;
}

export interface ContactDataRes {
  contacts: ContactData[];
}
export interface ContactData {
  id: number;
  name: string;
  profileImgUrl: string;
  phoneNumber?: string;
  email?: string;
  school?: string;
  careers?: string;
  description?: string;
  interests: InterestProps[];
}

export interface InterestProps {
  id: number;
  name: string;
}

export interface ContactInfo {
  id: number;
  name: string;
  profileImgUrl: string | null;
  phoneNumber: string;
  job: string;
  association: string;
  tags: Tag[];
  email: string;
}

export interface Tag {
  id: number;
  name: string;
}

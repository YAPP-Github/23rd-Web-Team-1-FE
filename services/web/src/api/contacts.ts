import { ContactInfo } from '@/types/contact';
import { ContactDataRes } from '@app/my/contact/types/contact';
import { ky } from '@linker/ky';

export const getContectInfo = (id: string) => {
  const data = ky.get<ContactInfo>(`/v1/contacts/${id}`);

  return data;
};

export const getContact = () => {
  const response = ky.get<ContactDataRes>('/v1/contacts');

  return response;
};

export const getContactBookMarks = () => {
  const response = ky.get<ContactDataRes>('/v1/contacts/bookmarks');

  return response;
};

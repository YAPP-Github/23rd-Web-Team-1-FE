import { ContactInfo } from '@/types/contact';
import { ky } from '@linker/ky';

export const getContectInfo = (id: string) => {
  const data = ky.get<ContactInfo>(`/v1/contacts/${id}`);

  return data;
};

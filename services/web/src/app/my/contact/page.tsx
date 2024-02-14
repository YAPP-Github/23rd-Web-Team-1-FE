import { ky } from '@linker/ky';

import Contact from './Contact';
import { ContactDataRes } from './types/contact';

export default async function ContactPage() {
  const contactData = (await getContact()).contacts;

  return (
    <div>
      <Contact contacts={contactData} />
    </div>
  );
}
const getContact = () => {
  const response = ky.get<ContactDataRes>('/v1/contacts');

  return response;
};

// const getContactSearch = (query: string) => {
//   if (query) {
//     return ky.get<ContactData[]>(`/v1/contacts/search?query=${query}`);
//   }
// };

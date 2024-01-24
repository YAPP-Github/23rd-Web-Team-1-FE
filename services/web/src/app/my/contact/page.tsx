import { ContactDataRes } from '@__server__/mocks/contact';
import Contact from '@app/my/contact/Contact';
import { ky } from '@linker/ky';

export default async function ContactPage() {
  const contactData = await getContact();
  const { contacts } = contactData;

  return <Contact contactData={contacts} />;
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

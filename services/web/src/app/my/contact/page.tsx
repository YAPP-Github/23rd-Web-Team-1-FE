import { ContactData } from '@__server__/mocks/contact';
import Contact from '@app/my/contact/Contact';
import { ky } from '@linker/ky';

export default async function ContactPage() {
  const contactData = await getContact();

  return <Contact contactData={contactData} />;
}
const getContact = () => {
  const response = ky.get<ContactData[]>('/v1/contacts');

  return response;
};

// const getContactSearch = (query: string) => {
//   if (query) {
//     return ky.get<ContactData[]>(`/v1/contacts/search?query=${query}`);
//   }
// };

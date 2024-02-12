import { ContactDataRes } from '@app/my/contact/types/contact';
import { ky } from '@linker/ky';

import ContactSearch from '../component/ContactSearch/ContactSearch';

const ContactSearchPage = async ({ params }: { params: { query: string } }) => {
  const contactData = await getContactSearch(params.query);

  return <ContactSearch contacts={contactData.contacts} />;
};

const getContactSearch = (query: string) => {
  const res = ky.get<ContactDataRes>(`/v1/contacts/search?query=${query}`);

  return res;
};

export default ContactSearchPage;

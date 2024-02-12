import { ContactDataRes } from '@app/my/contact/types/contact';
import { ky } from '@linker/ky';

import ContactSearch from '../component/ContactSearch/ContactSearch';

export default async function ContactSearchPage({ params }: { params: { query: string } }) {
  const searchData = await getSearchContact(params.query);

  return <ContactSearch contacts={searchData.contacts} />;
}

const getSearchContact = async (query: string) => {
  const response = await ky.get<ContactDataRes>(`/v1/contacts/search?query=${query}`);

  return response;
};

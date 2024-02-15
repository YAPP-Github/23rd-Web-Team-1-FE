'use client';
import { useAtomValue } from 'jotai';

import ContactSearch from './component/ContactSearch/ContactSearch';
import { queryAtom } from './component/stores/stores';
import { useGetContactSearch } from './hooks/useGetSearch';

const ContactSearchPage = () => {
  const query = useAtomValue(queryAtom);
  const { data } = useGetContactSearch(query);

  return <ContactSearch contacts={data.contacts} />;
};

export default ContactSearchPage;

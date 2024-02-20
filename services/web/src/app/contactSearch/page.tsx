'use client';
import { useAtomValue } from 'jotai';

import ContactSearch from './component/ContactSearch/ContactSearch';
import { useGetContactSearch } from './hooks/useGetSearch';
import { queryAtom } from './stores/stores';

const ContactSearchPage = () => {
  const query = useAtomValue(queryAtom);
  const { data } = useGetContactSearch(query);

  return <ContactSearch contacts={data.contacts} />;
};

export default ContactSearchPage;

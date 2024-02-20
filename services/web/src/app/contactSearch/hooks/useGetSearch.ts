'use client';
import { ContactDataRes } from '@app/my/contact/types/contact';
import { kyClient } from '@linker/ky';
import { useSuspenseQuery } from '@tanstack/react-query';

const getContactSearch = (query: string) => {
  const res = kyClient.get<ContactDataRes>(`/v1/contacts/search?query=${query}`);

  return res;
};

const useGetContactSearch = (query: string) => {
  return useSuspenseQuery<ContactDataRes>({
    queryKey: useGetContactSearch.getKey(query),
    queryFn: () => getContactSearch(query),
  });
};

useGetContactSearch.getKey = (query: string) => {
  return ['/api/v1/contacts/search', query];
};

export { useGetContactSearch, getContactSearch };

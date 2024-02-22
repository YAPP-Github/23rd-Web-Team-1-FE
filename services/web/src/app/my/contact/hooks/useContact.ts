import { getContact } from '@api/contacts';
import { useSuspenseQuery } from '@tanstack/react-query';

import { ContactDataRes } from '../types/contact';

const useContact = (defaultContact: ContactDataRes) => {
  const { data: defualtContactData } = useSuspenseQuery({
    queryKey: useContact.getKey(),
    queryFn: () => getContact(),
    initialData: defaultContact,
  });

  return { defualtContactData };
};

export default useContact;

useContact.getKey = () => {
  return ['/v1/contact'];
};

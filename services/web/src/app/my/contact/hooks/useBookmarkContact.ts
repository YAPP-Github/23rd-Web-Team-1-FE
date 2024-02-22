import { getContactBookMarks } from '@api/contacts';
import { useSuspenseQuery } from '@tanstack/react-query';

import { ContactDataRes } from '../types/contact';

const useBookmarkContact = (bookmarksContact: ContactDataRes) => {
  const { data: bookmarkContactData } = useSuspenseQuery({
    queryKey: useBookmarkContact.getKey(),
    queryFn: () => getContactBookMarks(),
    initialData: bookmarksContact,
  });

  return { bookmarkContactData };
};

export default useBookmarkContact;

useBookmarkContact.getKey = () => {
  return ['/v1/contacts/bookmarks'];
};

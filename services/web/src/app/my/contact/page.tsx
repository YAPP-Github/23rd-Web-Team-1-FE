import { ky } from '@linker/ky';

import Contact from './Contact';
import { ContactDataRes } from './types/contact';

export default async function ContactPage() {
  const contactData = (await getContact()).contacts;
  const bookmarkData = (await getContactBookMarks()).contacts;

  return (
    <div>
      <Contact defaultContact={contactData} bookmarksContact={bookmarkData} />
    </div>
  );
}
const getContact = () => {
  const response = ky.get<ContactDataRes>('/v1/contacts');

  return response;
};

const getContactBookMarks = () => {
  const response = ky.get<ContactDataRes>('/v1/contacts/bookmarks');

  return response;
};

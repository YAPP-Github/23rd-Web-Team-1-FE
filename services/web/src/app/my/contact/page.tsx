import { getContact, getContactBookMarks } from '@api/contacts';

import Contact from './Contact';

export default async function ContactPage() {
  const contactData = await getContact();
  const bookmarkData = await getContactBookMarks();

  return (
    <div>
      <Contact defaultContact={contactData} bookmarksContact={bookmarkData} />
    </div>
  );
}

'use client';

import { SearchInput } from '@linker/lds';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { wrapper, searchInputWrapper } from './Contact.css';
import ContactDefault from './component/ContactDefault/ContactDefault';
import useBookmarkContact from './hooks/useBookmarkContact';
import useContact from './hooks/useContact';
import { ContactDataRes } from './types/contact';

interface ContactProps {
  defaultContact: ContactDataRes;
  bookmarksContact: ContactDataRes;
}

export default function Contact({ defaultContact, bookmarksContact }: ContactProps) {
  const [isFoucsed, setIsFocused] = useState(false);
  const router = useRouter();

  const { defualtContactData } = useContact(defaultContact);
  const { bookmarkContactData } = useBookmarkContact(bookmarksContact);

  useEffect(() => {
    if (isFoucsed) {
      router.push('/contactSearch');
    }
  }, [isFoucsed, router]);

  return (
    <section className={wrapper}>
      <article className={searchInputWrapper}>
        <SearchInput
          placeholder="연락처 검색하기"
          isFoucsed={isFoucsed}
          setIsFocused={setIsFocused}
        />
      </article>
      <ContactDefault
        defaultContact={defualtContactData.contacts}
        bookmarksContact={bookmarkContactData.contacts}
      />
    </section>
  );
}

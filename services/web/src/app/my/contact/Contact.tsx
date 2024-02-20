'use client';

import { SearchInput } from '@linker/lds';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { wrapper, searchInputWrapper } from './Contact.css';
import ContactDefault from './component/ContactDefault/ContactDefault';
import { ContactData } from './types/contact';

export interface ContactProps {
  defaultContact: ContactData[];
  bookmarksContact: ContactData[];
}

export default function Contact({ defaultContact, bookmarksContact }: ContactProps) {
  const [isFoucsed, setIsFocused] = useState(false);
  const router = useRouter();

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
      <ContactDefault defaultContact={defaultContact} bookmarksContact={bookmarksContact} />
    </section>
  );
}

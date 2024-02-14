'use client';

import { SearchInput } from '@linker/lds';
import { useState } from 'react';

import { wrapper, searchInputWrapper } from './Contact.css';
import ContactDefault from './component/ContactDefault/ContactDefault';
import { ContactDataRes } from './types/contact';

export default function Contact({ contacts }: ContactDataRes) {
  const [query, setQuery] = useState('');

  return (
    <section className={wrapper}>
      <article className={searchInputWrapper}>
        <SearchInput placeholder="연락처 검색하기" setQuery={setQuery} query={query} />
      </article>
      <ContactDefault contacts={contacts} />
    </section>
  );
}

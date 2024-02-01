'use client';

import { ContactData, ContactDataRes } from '@__server__/mocks/contact';
import { SearchInput } from '@linker/lds';
import { useState } from 'react';

import { wrapper, searchInputWrapper } from './Contact.css';
import ContactDefault from './component/ContactDefault/ContactDefault';

interface ContactProps {
  contactData: ContactDataRes;
  contactSearchData?: ContactData[];
}

export default function Contact({ contactData }: ContactProps) {
  const [query, setQuery] = useState('');

  const onSubmit = () => {};

  return (
    <section className={wrapper}>
      <article className={searchInputWrapper}>
        <form onSubmit={onSubmit}>
          <SearchInput placeholder="연락처 검색하기" setQuery={setQuery} query={query} />
        </form>
      </article>
      <div>{query ? <div></div> : <ContactDefault contactData={contactData.contacts} />}</div>
    </section>
  );
}

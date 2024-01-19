/* eslint-disable arrow-parens */
'use client';
import { Contact } from '@__server__/mocks/contact';
// import { ky } from '@linker/ky';
import { Txt } from '@linker/lds';
import { SearchInput } from '@linker/lds';
import { colors } from '@linker/styles';
import { clsx } from 'clsx';
import { useState } from 'react';

import {
  wrapper,
  profileWrapper,
  totalCountWrapper,
  searchInputWrapper,
  favoritesTextWrapper,
  favoritesWrapper,
  favoriteDropDown,
} from './Contact.css';
import ContactItem from './component/ContactItem/ContactItem';
import contactMock from './component/__mock__';

export default function Contact() {
  //const contactData = await getContact();
  const [clickFavorites, setClickFavorites] = useState<boolean>(true);
  const onSubmit = () => {};
  const onFavoriteClick = () => {
    setClickFavorites((prev) => !prev);
  };

  return (
    <section className={clsx(wrapper)}>
      <article className={searchInputWrapper}>
        <form onSubmit={onSubmit}>
          <SearchInput placeholder="연락처 검색하기" />
        </form>
      </article>
      <article className={favoritesWrapper}>
        <div className={favoritesTextWrapper}>
          <Txt typography="p4" color={colors.gray800}>
            즐겨찾기
          </Txt>
          <Txt typography="p4" color={colors.gray800}>
            2
          </Txt>
        </div>
        <button className={favoriteDropDown} onClick={onFavoriteClick}>
          {clickFavorites ? '⌄' : '＾'}
        </button>
      </article>
      <article className={profileWrapper}>
        {clickFavorites &&
          contactMock.map((item) => (
            <ContactItem
              key={item.id}
              name={item.name}
              job={item.job}
              association={item.association}
              profileImgUrl={item.profileImgUrl}
            />
          ))}
      </article>
      <article className={clsx(totalCountWrapper)}>
        <Txt typography="p4" color={colors.gray800}>
          전체
        </Txt>
        <Txt typography="p4" color={colors.gray800}>
          {contactMock.length}
        </Txt>
      </article>
      <article className={profileWrapper}>
        {contactMock.map((item) => (
          <ContactItem
            key={item.id}
            name={item.name}
            job={item.job}
            association={item.association}
            profileImgUrl={item.profileImgUrl}
          />
        ))}
      </article>
    </section>
  );
}
// const getContact = () => {
//   const response = ky.get<Contact[]>('/v1/contacts');

//   return response;
// };

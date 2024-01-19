/* eslint-disable arrow-parens */
'use client';
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
import contentMockdata from './__mock__';
import ContactItem from './component/ContactItem/ContactItem';

function Contact() {
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
          contentMockdata.map((item) => (
            <ContactItem
              key={contentMockdata.indexOf(item)}
              name={item.name}
              career={item.career}
              company={item.company}
              profileImgUrl={item.profileImgUrl}
            />
          ))}
      </article>
      <article className={clsx(totalCountWrapper)}>
        <Txt typography="p4" color={colors.gray800}>
          전체
        </Txt>
        <Txt typography="p4" color={colors.gray800}>
          {contentMockdata.length}
        </Txt>
      </article>
      <article className={profileWrapper}>
        {contentMockdata.map((item) => (
          <ContactItem
            key={contentMockdata.indexOf(item)}
            name={item.name}
            career={item.career}
            company={item.company}
            profileImgUrl={item.profileImgUrl}
          />
        ))}
      </article>
    </section>
  );
}
export default Contact;

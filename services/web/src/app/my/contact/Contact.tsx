'use client';
import { ContactData } from '@__server__/mocks/contact';
import { Txt } from '@linker/lds';
import { SearchInput } from '@linker/lds';
import { colors } from '@linker/styles';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

interface ContactProps {
  contactData: ContactData[];
}
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

export default function Contact({ contactData }: ContactProps) {
  const [isClickFavorites, setIsClickFavorites] = useState(true);
  const onSubmit = () => {};
  const onFavoriteClick = () => {
    setIsClickFavorites((prev) => !prev);
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
          {isClickFavorites ? (
            <Image
              src="https://static.im-linker.com/downward-arrow.svg"
              width={24}
              height={24}
              alt={'검색아이콘'}
            />
          ) : (
            /* @todo 이후 아이콘 나오면 수정 예정 */
            '＾'
          )}
        </button>
      </article>
      <article className={profileWrapper}>
        {isClickFavorites &&
          contactData.map((item) => (
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
          {contactData.length}
        </Txt>
      </article>
      <article className={profileWrapper}>
        {contactData.map((item) => (
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

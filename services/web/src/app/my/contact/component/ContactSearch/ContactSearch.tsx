'use client';
import { ContactData } from '@__server__/mocks/contact';
import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

interface ContactProps {
  contactData: ContactData[];
}
import {
  profileWrapper,
  totalCountWrapper,
  favoritesTextWrapper,
  favoritesWrapper,
  favoriteDropDown,
} from './ContactSearch.css';
import ContactItem from '../ContactItem/ContactItem';

export default function ContactSearch({ contactData }: ContactProps) {
  const [isClickFavorites, setIsClickFavorites] = useState(true);

  const onFavoriteClick = () => {
    setIsClickFavorites((prev) => !prev);
  };

  return (
    <section>
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

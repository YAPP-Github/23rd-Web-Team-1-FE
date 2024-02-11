'use client';

import { Icon, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { clsx } from 'clsx';
import { useState } from 'react';

import {
  profileWrapper,
  totalCountWrapper,
  favoritesTextWrapper,
  favoritesWrapper,
  favoriteDropDown,
} from './ContactSearch.css';
import { ContactDataRes } from '../../types/contact';
import ContactItem from '../ContactItem/ContactItem';

export default function ContactSearch({ contacts }: ContactDataRes) {
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
            <Icon name="down" size={24} />
          ) : (
            /* @todo 이후 아이콘 나오면 수정 예정 */
            '＾'
          )}
        </button>
      </article>
      <article className={profileWrapper}>
        {isClickFavorites &&
          contacts.map((item) => (
            <ContactItem
              key={item.id}
              name={item.name}
              school={item.school}
              id={item.id}
              interests={item.interests}
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
          {contacts.length}
        </Txt>
      </article>
      <article className={profileWrapper}>
        {contacts.map((item) => (
          <ContactItem
            key={item.id}
            name={item.name}
            school={item.school}
            id={item.id}
            interests={item.interests}
            association={item.association}
            profileImgUrl={item.profileImgUrl}
          />
        ))}
      </article>
    </section>
  );
}

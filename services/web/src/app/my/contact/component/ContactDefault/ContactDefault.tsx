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
} from './ContactDefault.css';
import { ContactData } from '../../types/contact';
import ContactItem from '../ContactItem/ContactItem';

interface Props {
  defaultContact: ContactData[];
  bookmarksContact: ContactData[];
}

export default function ContactDefault({ defaultContact, bookmarksContact }: Props) {
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
            {bookmarksContact.length}
          </Txt>
        </div>
        {bookmarksContact.length > 1 ? (
          <button className={favoriteDropDown} onClick={onFavoriteClick}>
            {isClickFavorites ? <Icon name="down" size={24} /> : <Icon name="up" size={24} />}
          </button>
        ) : null}
      </article>
      <article className={profileWrapper}>
        {isClickFavorites &&
          bookmarksContact.map((item) => (
            <ContactItem
              key={item.id}
              name={item.name}
              school={item.school}
              careers={item.careers}
              id={item.id}
              interests={item.interests}
              profileImgUrl={item.profileImgUrl}
            />
          ))}
      </article>
      <article className={clsx(totalCountWrapper)}>
        <Txt typography="p4" color={colors.gray800}>
          전체
        </Txt>
        <Txt typography="p4" color={colors.gray800}>
          {defaultContact.length}
        </Txt>
      </article>
      <article className={profileWrapper}>
        {defaultContact.map((item) => (
          <ContactItem
            key={item.id}
            name={item.name}
            school={item.school}
            careers={item.careers}
            id={item.id}
            interests={item.interests}
            profileImgUrl={item.profileImgUrl}
          />
        ))}
      </article>
    </section>
  );
}

'use client';

import ContactItem from '@app/my/contact/component/ContactItem/ContactItem';
import { SearchInput, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  container,
  header,
  searchWrapper,
  nullSearchItemWrapper,
  subtractItemWrapper,
  textWrapper,
} from './ContactSearch.css';
import { ContactDataRes } from '../../../my/contact/types/contact';
import { queryAtom } from '../../stores/stores';

export default function ContactSearch({ contacts }: ContactDataRes) {
  const [query, setQuery] = useState('');
  const setQueryAtom = useSetAtom(queryAtom);
  const router = useRouter();
  const handleCancelClick = () => {
    router.push('/my/contact');
  };

  useEffect(() => {
    setQueryAtom(query);
  }, [query, setQueryAtom]);

  return (
    <section className={container}>
      <header className={header}>
        <SearchInput placeholder="연락처 검색하기" query={query} setQuery={setQuery} />
        <button onClick={handleCancelClick}>
          <Txt typography="p2" fontWeight="regular" color={colors.black} className={textWrapper}>
            취소
          </Txt>
        </button>
      </header>
      <section className={searchWrapper}>
        {contacts.length === 0 ? (
          <article className={nullSearchItemWrapper}>
            <div className={subtractItemWrapper}>
              <Image
                src={'https://static.im-linker.com/images/Subtract.svg'}
                width={48}
                height={48}
                alt={'subtract'}
              />
              <Txt typography="p1" color={colors.gray700} fontWeight="regular">
                지인 이름을 검색해보세요
              </Txt>
            </div>
          </article>
        ) : (
          <article className={searchWrapper}>
            {contacts.map((item) => (
              <div key={item.id}>
                <ContactItem
                  id={item.id}
                  name={item.name}
                  profileImgUrl={item.profileImgUrl}
                  interests={item.interests}
                  school={item.school}
                />
              </div>
            ))}
          </article>
        )}
      </section>
    </section>
  );
}

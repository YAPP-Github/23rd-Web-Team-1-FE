'use client';

import { Calendar, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { wrapper, container } from './TimelineNull.css';

const TimelineNull = () => {
  const router = useRouter();

  const [selectDate, setSelectDate] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (selectDate) {
      router.push('/my/timeline/search');
    }
  }, [selectDate, router]);

  return (
    <>
      <Calendar
        data={[]}
        value={date}
        onChange={(value) => {
          setSelectDate(true);
          setDate(value as Date);
        }}
        withModeChange
      />
      <article className={container}>
        <section className={wrapper}>
          <Image
            src={'https://static.im-linker.com/images/Subtract.svg'}
            width={48}
            height={48}
            alt={'subtract'}
          />
          <Txt typography="p1" color={colors.gray700} fontWeight="regular">
            예정된 일정이 없습니다.
          </Txt>
          <Txt typography="p1" color={colors.gray700} fontWeight="regular">
            일정을 추가해주세요.
          </Txt>
        </section>
      </article>
    </>
  );
};

export default TimelineNull;

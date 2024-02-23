'use client';

import { Calendar, Spacing } from '@linker/lds';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
      <Spacing size={20} />
    </>
  );
};

export default TimelineNull;

'use client';

import { Calendar, Spacing, Txt } from '@linker/lds';
import { format } from 'date-fns';
import { useState } from 'react';

const Feed = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Calendar
        value={date}
        onChange={(value) => {
          setDate(value as Date);
        }}
      />

      <Spacing size={20} />
      <Txt>선택한 날짜: {format(date, 'yyyy-MM-dd')}</Txt>
    </>
  );
};

export default Feed;

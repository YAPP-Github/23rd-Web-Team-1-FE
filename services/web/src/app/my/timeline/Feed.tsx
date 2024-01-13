'use client';
import { Calendar, Spacing } from '@linker/lds';
import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import clsx from 'clsx';
import { useState } from 'react';

import { timelineItemWrapper, timelineCountWrapper } from './Feed.css';
import TimelineItem from './TimelineItem/TimelineItem';
import timelineMockdata from './__mock__';

const Feed = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Calendar
        value={date}
        onChange={(value) => {
          setDate(value as Date);
        }}
        withModeChange
      />

      <Spacing size={20} />
      <section className={clsx(timelineCountWrapper)}>
        <Txt typography="p3" fontWeight="medium" color={colors.gray950}>
          내 정보
        </Txt>
        <Txt typography="p3" fontWeight="medium" color={colors.primary}>
          {timelineMockdata.length}
        </Txt>
      </section>
      <section className={clsx(timelineItemWrapper)}>
        {timelineMockdata.map((item) => (
          <div key={item.title}>
            <TimelineItem
              title={item.title}
              time={item.time}
              hashtag={item.hashtag as string[]}
              member={item.member}
              memo={item.memo as string}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Feed;

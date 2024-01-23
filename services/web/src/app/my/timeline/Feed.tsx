'use client';
import { Calendar, Spacing } from '@linker/lds';
import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { useState } from 'react';

import { timelineItemWrapper, timelineCountWrapper } from './Feed.css';
import timelineMockdata from './__mock__';
import TimelineItem from './component/TimelineItem/TimelineItem';

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
      <section className={timelineCountWrapper}>
        <Txt typography="p3" fontWeight="medium" color={colors.gray950}>
          내 정보
        </Txt>
        <Txt typography="p3" fontWeight="medium" color={colors.blue500}>
          {timelineMockdata.length}
        </Txt>
      </section>
      <section className={timelineItemWrapper}>
        {timelineMockdata.map((item) => (
          <div key={item.title}>
            <TimelineItem
              title={item.title}
              time={item.time}
              hashtag={item.hashtag || []}
              member={item.member}
              memo={item.memo || ''}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Feed;

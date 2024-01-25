'use client';
import { TimelineRes } from '@__server__/mocks/feed';
import { Calendar, Spacing } from '@linker/lds';
import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { useState } from 'react';

import { timelineItemWrapper, timelineMonthWrapper } from './Feed.css';
import TimelineItem from './component/TimelineItem/TimelineItem';

interface FeedProps {
  timelineItems: TimelineRes;
}

const Feed = ({ timelineItems }: FeedProps) => {
  const [date, setDate] = useState(new Date());
  //const [diffYear, setDiffYear] = useState(false); // TimelineItem들 사이에 연도가 다른지 판단

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

      <section className={timelineMonthWrapper}>
        <Txt typography="h7" fontWeight="bold" color={colors.black}>
          {date.getMonth() + 1}월
        </Txt>
      </section>
      <section className={timelineItemWrapper}>
        {timelineItems.schedules.map((item) => (
          <div key={item.title}>
            <TimelineItem
              scheduleId={item.scheduleId}
              profileImgUrl={item.profileImgUrl}
              title={item.title}
              startDateTime={item.startDateTime}
              endDateTime={item.endDateTime}
              member={item.member}
              hex={item.hex}
              memo={item.memo}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default Feed;

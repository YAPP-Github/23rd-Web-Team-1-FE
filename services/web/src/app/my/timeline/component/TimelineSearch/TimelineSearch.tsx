'use client';
import { TimelineRes } from '@__server__/mocks/feed';
import { Calendar, Spacing } from '@linker/lds';
import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { timelineItemWrapper, timelineMonthWrapper } from './TimelineSearch.css';
import TimelineItem from '../TimelineItem/TimelineItem';

interface FeedProps {
  timelineItems: TimelineRes;
}

const TimelineSearch = ({ timelineItems }: FeedProps) => {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [selectDate, setSelectDate] = useState(false);

  useEffect(() => {
    if (selectDate === true) {
      router.push(
        `/my/timeline/search?from=${`${format(date, 'yyyy-MM-dd')} 00:00:00`}&to=${`${format(date, 'yyyy-MM-dd')} 11:59:59`}&limit=32`,
      );
    }
  }, [selectDate]);

  return (
    <>
      <Calendar
        value={date}
        onChange={(value) => {
          setSelectDate(true);
          setDate(value as Date);
        }}
        withModeChange
      />
      <Spacing size={20} />
      {/* 특정 날짜를 선택(검색)했을 경우 */}
      {selectDate && (
        <div>
          <section className={timelineMonthWrapper}>
            <Txt typography="h7" fontWeight="bold" color={colors.black}>
              {format(date, 'M월')}
            </Txt>
          </section>
          <section className={timelineItemWrapper}>
            {timelineItems.schedules.map((item) => (
              <button key={item.scheduleId}>
                <TimelineItem
                  scheduleId={item.scheduleId}
                  profileImgUrl={item.profileImgUrl}
                  title={item.title}
                  startDateTime={item.startDateTime}
                  endDateTime={item.endDateTime}
                  member={item.member}
                  color={item.color}
                  description={item.description}
                />
              </button>
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default TimelineSearch;

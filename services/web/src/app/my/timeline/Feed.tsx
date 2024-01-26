'use client';
import { TimelineRes, TimelineItemProps } from '@__server__/mocks/feed';
import { Calendar, Spacing } from '@linker/lds';
import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { useEffect, useState } from 'react';

import { timelineItemWrapper, timelineMonthWrapper } from './Feed.css';
import TimelineItem from './component/TimelineItem/TimelineItem';

interface FeedProps {
  timelineItems: TimelineRes;
}

const Feed = ({ timelineItems }: FeedProps) => {
  const [date, setDate] = useState(new Date());
  const [diffYear, setDiffYear] = useState(false);
  const [diffIdx, setDiffIdx] = useState(0);
  const [prevYear, setPrevYear] = useState<TimelineItemProps[]>();
  const [nextYear, setNextYear] = useState<TimelineItemProps[]>();

  useEffect(() => {
    const stdYear = timelineItems.schedules[0].endDateTime.slice(0, 4);
    const hasDifferentYear = timelineItems.schedules.some((item) => {
      return item.endDateTime.slice(0, 4) !== stdYear;
    });
    // 연도가 다른 원소의 첫번째 인덱스를 리턴
    const differentYearIndex = timelineItems.schedules.findIndex((item, index) => {
      return item.endDateTime.slice(0, 4) !== stdYear;
    });

    setDiffYear(hasDifferentYear);
    setDiffIdx(differentYearIndex);

    if (hasDifferentYear) {
      // prevYear에는 0부터 diffIdx-1까지의 원소 저장
      setPrevYear(timelineItems.schedules.slice(0, diffIdx));
      // nextYear에는 diffIdx부터 끝까지의 원소 저장
      setNextYear(timelineItems.schedules.slice(diffIdx));
    }
  }, [timelineItems.schedules, diffIdx]);

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
      {/*연도가 다른 경우 */}
      {diffYear && prevYear && nextYear && (
        <div>
          <section className={timelineMonthWrapper}>
            <Txt typography="h7" fontWeight="bold" color={colors.black}>
              {`${date.getMonth()}월`}
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
          <section className={timelineMonthWrapper}>
            <Txt typography="h7" fontWeight="bold" color={colors.black}>
              {`${date.getFullYear()}년${date.getMonth()}${1}월`}
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
        </div>
      )}
      {/*연도가 다르지 않은 경우 */}
      {diffYear === false && (
        <div>
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
        </div>
      )}
    </>
  );
};

export default Feed;

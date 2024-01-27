'use client';
import { TimelineRes, TimelineItemProps } from '@__server__/mocks/feed';
import { Calendar, Spacing } from '@linker/lds';
import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

import { timelineItemWrapper, timelineMonthWrapper } from './Feed.css';
import TimelineItem from './component/TimelineItem/TimelineItem';

interface FeedProps {
  timelineItems: TimelineRes;
}

const Feed = ({ timelineItems }: FeedProps) => {
  const [date, setDate] = useState(new Date());
  const [selectDate, setSelectDate] = useState(false);
  const stdYear = format(timelineItems.schedules[0].startDateTime, 'yyyy');
  const [prevYear, setPrevYear] = useState<TimelineItemProps[]>();
  const [nextYear, setNextYear] = useState<TimelineItemProps[]>();

  // 받아온 데이터들 중 다른 연도가 있는지
  // 연도가 하나라도 다른게 판단이 되면 diffYear가 true가됨
  const hasDifferentYear = timelineItems.schedules.some((item) => {
    const formattedYear = format(item.startDateTime, 'yyyy');

    return formattedYear === stdYear;
  });
  // 연도가 다른 원소의 첫번째 인덱스를 리턴
  const diffIdx = timelineItems.schedules.findIndex((item, index) => {
    return format(item.startDateTime, 'yyyy') !== stdYear;
  });

  useEffect(() => {
    // prevYear에는 0부터 diffIdx-1까지의 원소 저장
    setPrevYear(timelineItems.schedules.slice(0, diffIdx));
    // nextYear에는 diffIdx부터 끝까지의 원소 저장
    setNextYear(timelineItems.schedules.slice(diffIdx));
  }, [diffIdx, hasDifferentYear, timelineItems.schedules]);

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
      {/* 특정 날짜를 선택했을 경우 */}
      {selectDate && (
        <div>
          <section className={timelineMonthWrapper}>
            <Txt typography="h7" fontWeight="bold" color={colors.black}>
              {date.getMonth() + 1}월
            </Txt>
          </section>
          <section className={timelineItemWrapper}>
            {timelineItems.schedules.map((item) => (
              <div key={item.scheduleId}>
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

      {/*특정 날짜를 선택하지 않은 경우 */}
      {/*연도가 다른 경우 */}
      {!selectDate && hasDifferentYear && prevYear && nextYear && (
        <div>
          <section className={timelineMonthWrapper}>
            <Txt typography="h7" fontWeight="bold" color={colors.black}>
              {/* 현재 달이 1월인 경우 */}
              {new Date().getMonth() + 1 === 1 ? (
                <div>12월</div>
              ) : (
                <div>{format(new Date(), 'M월')}</div>
              )}
            </Txt>
          </section>
          <section className={timelineItemWrapper}>
            {prevYear.map((item) => (
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
              {format(new Date(), 'yyyy년 M월')}
            </Txt>
          </section>
          <section className={timelineItemWrapper}>
            {nextYear.map((item) => (
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
      {!selectDate && hasDifferentYear === false && (
        <div>
          <section className={timelineMonthWrapper}>
            <Txt typography="h7" fontWeight="bold" color={colors.black}>
              {new Date().getMonth() + 1}월
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

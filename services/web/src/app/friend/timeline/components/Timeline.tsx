'use client';

import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

import { timelineItemWrapper, timelineMonthWrapper } from './Timeline.css';
import TimelineItem from './TimelineItem/TimelineItem';
import { TimelineItemProps } from '../types/schedule';

interface TimelineDefaultProps {
  concatSchedules: TimelineItemProps[];
}

const Timeline = ({ concatSchedules }: TimelineDefaultProps) => {
  const [prevYear, setPrevYear] = useState<TimelineItemProps[]>();
  const [nextYear, setNextYear] = useState<TimelineItemProps[]>();
  const [dropdownClick, setDropdownClick] = useState(-1);

  const startDateYear = format(concatSchedules[0].startDateTime, 'yyyy');

  // 받아온 데이터들 중 다른 연도가 있는지
  // 연도가 하나라도 다른게 판단이 되면 diffYear가 true가됨
  const hasDifferentYear = concatSchedules.some((item) => {
    const formattedYear = format(item.startDateTime, 'yyyy');

    return formattedYear === startDateYear;
  });
  // 연도가 다른 원소의 첫번째 인덱스를 리턴
  const diffIdx = concatSchedules.findIndex((item, index) => {
    return format(item.startDateTime, 'yyyy').toString() !== startDateYear.toString();
  });

  useEffect(() => {
    // prevYear에는 0부터 diffIdx-1까지의 원소 저장
    setPrevYear(concatSchedules.slice(0, diffIdx));

    // nextYear에는 diffIdx부터 끝까지의 원소 저장
    setNextYear(concatSchedules.slice(diffIdx));
  }, [diffIdx, hasDifferentYear, concatSchedules]);

  return (
    <>
      {/*특정 날짜를 선택하지 않은 경우 */}

      {/*연도가 다른 경우 */}
      {hasDifferentYear === false && prevYear && nextYear && (
        <div>
          <section className={timelineMonthWrapper}>
            <Txt typography="h7" fontWeight="bold" color={colors.black}>
              12월
            </Txt>
          </section>
          <section className={timelineItemWrapper}>
            {prevYear.map((item) => (
              <button key={item.scheduleId}>
                <TimelineItem
                  scheduleId={item.scheduleId}
                  profileImgUrl={item.profileImgUrl}
                  title={item.title}
                  startDateTime={item.startDateTime}
                  endDateTime={item.endDateTime}
                  contacts={item.contacts}
                  color={item.color}
                  description={item.description}
                  dropdownClick={dropdownClick}
                  setDropdownClick={setDropdownClick}
                />
              </button>
            ))}
          </section>
          <section className={timelineMonthWrapper}>
            <Txt typography="h7" fontWeight="bold" color={colors.black}>
              {format(new Date(nextYear[0].startDateTime), 'yyyy년 M월')}
            </Txt>
          </section>
          <section className={timelineItemWrapper}>
            {nextYear.map((item) => (
              <button key={item.scheduleId}>
                <TimelineItem
                  scheduleId={item.scheduleId}
                  profileImgUrl={item.profileImgUrl}
                  title={item.title}
                  startDateTime={item.startDateTime}
                  endDateTime={item.endDateTime}
                  contacts={item.contacts}
                  color={item.color}
                  description={item.description}
                  dropdownClick={dropdownClick}
                  setDropdownClick={setDropdownClick}
                />
              </button>
            ))}
          </section>
        </div>
      )}
      {/*연도가 다르지 않은 경우 */}
      {hasDifferentYear === true && (
        <div>
          <section className={timelineMonthWrapper}>
            <Txt typography="h7" fontWeight="bold" color={colors.black}>
              {format(concatSchedules[0].startDateTime, 'M월')}
            </Txt>
          </section>
          <section className={timelineItemWrapper}>
            {concatSchedules.map((item) => (
              <button key={item.scheduleId}>
                <TimelineItem
                  scheduleId={item.scheduleId}
                  profileImgUrl={item.profileImgUrl}
                  title={item.title}
                  startDateTime={item.startDateTime}
                  endDateTime={item.endDateTime}
                  contacts={item.contacts}
                  color={item.color}
                  description={item.description}
                  dropdownClick={dropdownClick}
                  setDropdownClick={setDropdownClick}
                />
              </button>
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default Timeline;

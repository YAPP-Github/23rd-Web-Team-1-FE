'use client';

import { Calendar, Spacing } from '@linker/lds';
import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { format, startOfMonth, endOfMonth } from 'date-fns';
import { useSetAtom } from 'jotai';
import { useState, useEffect } from 'react';

import { timelineItemWrapper, timelineMonthWrapper } from './TimelineSearch.css';
import { useGetSearchSchedule } from '../../hooks/useGetSearchSchedule';
import { selectDateAtom } from '../../stores/store';
import { GetTimelineRes } from '../../types/schedule';
import TimelineItem from '../TimelineItem/TimelineItem';

const TimelineSearch = ({ schedules }: GetTimelineRes) => {
  const [date, setDate] = useState(new Date());
  const [dropdownClick, setDropdownClick] = useState(-1);
  const setAtomDate = useSetAtom(selectDateAtom);
  const [calendarDotData, setCalendarDotData] = useState<Array<Date | string>>([]);
  const firstDayOfMonth = format(startOfMonth(date), 'yyyy-MM-dd 00:00:00');
  const lastDayOfMonth = format(endOfMonth(date), 'yyyy-MM-dd 23:59:59');
  const { data } = useGetSearchSchedule(firstDayOfMonth, lastDayOfMonth, 1);

  useEffect(() => {
    setAtomDate(format(date, 'yyyy-MM-dd'));
  }, [date, setAtomDate]);
  useEffect(() => {
    let tempData: Array<string | Date> = [];

    tempData = [...tempData, ...data.schedules.map((item) => item.startDateTime)];
    setCalendarDotData(tempData);
  }, []);

  return (
    <>
      <Calendar
        value={date}
        data={calendarDotData}
        onChange={(value) => {
          setDate(value as Date);
        }}
        withModeChange
      />
      <Spacing size={20} />
      <section className={timelineMonthWrapper}>
        <Txt typography="h7" fontWeight="bold" color={colors.black}>
          {format(date, 'M월')}
        </Txt>
      </section>
      <section className={timelineItemWrapper}>
        {schedules.map((item) => (
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
    </>
  );
};

export default TimelineSearch;

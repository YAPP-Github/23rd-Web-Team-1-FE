'use client';

import clsx from 'clsx';
import { differenceInDays, differenceInWeeks, format, startOfMonth } from 'date-fns';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { forwardRef, useState } from 'react';
import { Calendar as ReactCalendar, CalendarProps } from 'react-calendar';
import { LooseValue, Value } from 'react-calendar/dist/cjs/shared/types';
import 'react-calendar/dist/Calendar.css';

import { calendar, dot, container, buttonWrapper } from './Calendar.css';

interface Props extends Omit<CalendarProps, 'value' | 'onChange'> {
  value?: LooseValue;
  mark?: Array<Date | string>;
  className?: string;
  withModeChange?: boolean;
  onChange?: (date: Value, event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Calendar = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { value, mark, className, withModeChange, onChange, ...rest } = props;

  const [isWeekMode, setIsWeekMode] = useState(false);

  return (
    <motion.div
      className={container}
      style={{ height: isWeekMode ? '11.6rem' : '100%' }}
      animate={{ height: isWeekMode ? '11.6rem' : '100%' }}
      transition={{ duration: 0.3 }}
    >
      {withModeChange && (
        <button className={buttonWrapper} onClick={() => setIsWeekMode((prev) => !prev)}>
          <Image src="https://static.im-linker.com/calendar.png" alt="" width={24} height={24} />
        </button>
      )}
      <ReactCalendar
        {...rest}
        ref={ref}
        value={value ?? new Date()}
        onChange={onChange}
        tileContent={({ date }) => <TileContent date={date} mark={mark ?? [new Date()]} />}
        formatDay={(_, date) => format(date, 'dd')}
        locale="ko-KO"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        nextLabel={
          <Image src="https://static.im-linker.com/right-arrow.png" alt="" width={18} height={18} />
        }
        prevLabel={
          <Image src="https://static.im-linker.com/left-arrow.png" alt="" width={18} height={18} />
        }
        calendarType="gregory"
        className={clsx(calendar, className)}
        maxDate={isWeekMode ? endOfWeek(value as Date) : undefined}
        minDate={isWeekMode ? startOfWeek(value as Date) : undefined}
        tileClassName={({ date }) => {
          if (!isWeekMode) {
            return 'monthmode';
          }

          const weekNumber = getWeekNumber(value as Date);
          const dday = differenceInDays(date, startOfWeek(value as Date));

          if (dday >= 0 && dday <= 6) {
            return isWeekMode ? `weekmode__${weekNumber}` : '';
          }
        }}
      />
    </motion.div>
  );
});

export default Calendar;

const TileContent = ({ date, mark }: { date: Date; mark?: Array<Date | string> }) => {
  const html = [];
  const isMarked = mark?.find((x: Date | string) => {
    return format(x, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd');
  });

  if (isMarked) {
    html.push(<div key={Date.now()} className={dot}></div>);
  }

  return <div>{html}</div>;
};

const startOfWeek = (date: Date) => {
  const start = new Date(date);

  start.setDate(date.getDate() - date.getDay());

  return start;
};

const endOfWeek = (date: Date) => {
  const end = new Date(date);

  end.setDate(date.getDate() - date.getDay() + 6);

  return end;
};

const getWeekNumber = (date: Date) => {
  const firstDayOfMonth = startOfMonth(date);
  const startOfFirstWeek = startOfWeek(firstDayOfMonth);

  return differenceInWeeks(date, startOfFirstWeek) + 1;
};

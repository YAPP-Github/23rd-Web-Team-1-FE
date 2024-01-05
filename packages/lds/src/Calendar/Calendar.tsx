'use client';

import clsx from 'clsx';
import { format } from 'date-fns';
import Image from 'next/image';
import { forwardRef } from 'react';
import { Calendar as ReactCalendar, CalendarProps } from 'react-calendar';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import 'react-calendar/dist/Calendar.css';

import { container, dot } from './Calendar.css';

interface Props extends Omit<CalendarProps, 'value' | 'onChange'> {
  value?: Date | string | null;
  mark?: Array<Date | string>;
  className?: string;
  onChange?: (date: Value, event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Calendar = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { value, mark, className, onChange, ...rest } = props;

  return (
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
      minDetail="month"
      maxDetail="month"
      calendarType="gregory"
      className={clsx(container, className)}
    />
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

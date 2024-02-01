import { Icon, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { differenceInDays, parseISO } from 'date-fns';
import Link from 'next/link';

import { card, titleInfo, scheduleInfo, button } from './ScheduleCard.css';

interface ScheduleCardProps {
  title: string;
  endDateTime: string;
}

function formatPreviousDay(dateTime: string) {
  const date = parseISO(dateTime);
  const difference = differenceInDays(new Date(), date);

  return `${difference}일 전 일정`;
}

function ScheduleCard({ title, endDateTime }: ScheduleCardProps) {
  return (
    <li className={card}>
      <div className={scheduleInfo}>
        <Txt typography="b2" className={titleInfo}>
          {title}
        </Txt>
        <Txt typography="p5" color={colors.gray500}>
          {formatPreviousDay(endDateTime)}
        </Txt>
      </div>
      {/** @todo 일정기록 페이지와 연결 필요 */}
      <Link className={button} href="">
        <Icon name="pencil-fill-blue" size={20} />
        <Txt typography="p5" color={colors.gray600}>
          노트쓰기
        </Txt>
      </Link>
    </li>
  );
}

export default ScheduleCard;

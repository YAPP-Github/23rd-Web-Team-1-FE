import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import Image from 'next/image';

import {
  scheduleWrapper,
  profileImageWrapper,
  profileImageStyle,
  calendarImageStyle,
  scheduleInfo,
  dateWrapper,
  date,
} from './ScheduleItem.css';

/**
 * @todo global context로 이동 필요
 */
interface Schedule {
  scheduleId: number;
  title: string;
  startDateTime: string;
  endDateTime: string;
  profileImgUrl: string | null;
}

interface ScheduleItemProps {
  schedule: Schedule;
}

function ScheduleItem({ schedule }: ScheduleItemProps) {
  const profileImage = schedule.profileImgUrl ?
    (
      <Image
        className={profileImageStyle}
        src={schedule.profileImgUrl}
        width={48}
        height={48}
        alt="profile-image"
      />
    ) :
    (
      <Image
        className={calendarImageStyle}
        src={'https://static.im-linker.com/calendar.png'}
        width={20}
        height={20}
        alt="profile-image"
      />
    )

  return (
    <div className={scheduleWrapper}>
      <div className={profileImageWrapper}>
        {profileImage}
      </div>
      <div className={scheduleInfo}>
        <Txt typography='p1'>{schedule.title}</Txt>
        <div className={dateWrapper}>
          <Image
            src="https://static.im-linker.com/time.png"
            width={12}
            height={12}
            alt="time-icon"
          />
          <Txt
            className={date}
            typography='p3'
            color={colors.gray700}
          >
            {format(schedule.startDateTime, 'yyyy. MM. dd. EEE', { locale: ko })}
          </Txt>
        </div>
      </div>
    </div>
  );
}

export default ScheduleItem;

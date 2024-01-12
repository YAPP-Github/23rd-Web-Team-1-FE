import type { Schedule } from '@/app/my/feed/(api)/feedAPI';
import { getDisplayDate } from '@/app/my/feed/(utils)/dateUtils';
import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
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

interface ScheduleItemProps {
  schedule: Schedule;
  isGroupSchedule: boolean;
}

function ScheduleItem({ schedule, isGroupSchedule }: ScheduleItemProps) {
  const profileImage = isGroupSchedule ?
    (
      <Image
        className={calendarImageStyle}
        src={'https://static.im-linker.com/calendar.png'}
        width={20}
        height={20}
        alt="profile-image"
      />
    ) :
    (
      <Image
        className={profileImageStyle}
        src={schedule.profileUrl}
        width={48}
        height={48}
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
            color={colors.grey050}
          >
            {getDisplayDate(schedule.startDatetime)}
          </Txt>
        </div>
      </div>
    </div>
  );
}

export default ScheduleItem;

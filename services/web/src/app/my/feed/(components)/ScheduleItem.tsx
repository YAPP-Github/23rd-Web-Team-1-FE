import type { Schedule } from '@/app/my/feed/(api)/feedAPI'
import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import Image from 'next/image';

import { scheduleWrapper, profileImage, scheduleInfo, dateWrapper, date } from './ScheduleItem.css'

interface ScheduleItemProps {
  schedule: Schedule;
}

function ScheduleItem({ schedule }: ScheduleItemProps) {
  return (
    <div className={scheduleWrapper}>
      <Image
        className={profileImage}
        src={schedule.profileUrl}
        width={48}
        height={48}
        alt="profile"
      />
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
            {schedule.startDatetime}
          </Txt>
        </div>
      </div>
    </div>
  );
}

export default ScheduleItem;

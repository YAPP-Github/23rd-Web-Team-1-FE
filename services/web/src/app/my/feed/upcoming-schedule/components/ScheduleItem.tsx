import type { Schedule } from '@/types/schedule';
import { Icon, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import Image from 'next/image';

import {
  scheduleWrapper,
  profileImageWrapper,
  profileImageStyle,
  scheduleInfo,
  dateWrapper,
  date,
} from './ScheduleItem.css';

interface ScheduleItemProps {
  schedule: Schedule;
}

function ScheduleItem({ schedule }: ScheduleItemProps) {
  const profileImage = schedule.profileImgUrl ? (
    <Image
      className={profileImageStyle}
      src={schedule.profileImgUrl}
      width={48}
      height={48}
      alt="profile-image"
    />
  ) : (
    <Icon name="calender-gray" size={30} />
  );

  return (
    <div className={scheduleWrapper}>
      <div className={profileImageWrapper}>{profileImage}</div>
      <div className={scheduleInfo}>
        <Txt typography="p1">{schedule.title}</Txt>
        <div className={dateWrapper}>
          <Icon name="time-gray" size={18} />
          <Txt className={date} typography="p3" color={colors.gray700}>
            {format(schedule.startDateTime, 'yyyy. MM. dd. EEE', { locale: ko })}
          </Txt>
        </div>
      </div>
    </div>
  );
}

export default ScheduleItem;

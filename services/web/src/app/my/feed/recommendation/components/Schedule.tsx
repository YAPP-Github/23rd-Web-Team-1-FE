import { Icon, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { format, isSameDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import Image from 'next/image';

import { wrapper, profileImage, scheduleDateWrapper, scheduleDateInfo } from './Schedule.css';

interface ScheduleProps {
  title: string;
  profileImgUrl: string;
  startDateTime: string;
  endDateTime: string;
}

function formatDateDuration(startDateTime: string, endDateTime: string) {
  if (isSameDay(startDateTime, endDateTime)) {
    const isStartDateAfternoon = new Date(startDateTime).getHours() >= 12;
    const isEndDateAfternoon = new Date(endDateTime).getHours() >= 12;

    return `${format(startDateTime, 'yyyy. MM. dd. EEE ·', { locale: ko })} ${format(
      startDateTime,
      'a hh:mm',
      { locale: ko },
    )} - ${format(endDateTime, isStartDateAfternoon === isEndDateAfternoon ? 'hh:mm' : 'a hh:mm', {
      locale: ko,
    })}`;
  }

  return `${format(startDateTime, 'yyyy. MM. dd. EEE · a hh:mm', { locale: ko })} - ${format(
    endDateTime,
    'yyyy. MM. dd. EEE · a hh:mm',
    { locale: ko },
  )}`;
}

function Schedule({ title, profileImgUrl, startDateTime, endDateTime }: ScheduleProps) {
  return (
    <div className={wrapper}>
      <Image
        className={profileImage}
        src={profileImgUrl}
        width="56"
        height="56"
        alt="profile_image"
      />
      <div>
        <Txt typography="h7">{title}</Txt>
        <div className={scheduleDateWrapper}>
          <Icon name="time-gray" size={18} />
          <Txt className={scheduleDateInfo} typography="p3" color={colors.gray700}>
            {formatDateDuration(startDateTime, endDateTime)}
          </Txt>
        </div>
      </div>
    </div>
  );
}

export default Schedule;

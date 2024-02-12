'use client';

import { MemberProps } from '@__server__/mocks/feed';
import { List } from '@linker/lds';
import { Icon } from '@linker/lds';
import { Txt } from '@linker/lds';
import { Dropdown } from '@linker/lds';
import { colors } from '@linker/styles';
import clsx from 'clsx';
import { format, getHours, getMinutes } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { InvitionItem } from './InvitationItem/InvitationItem';
import {
  scheduleHeaderIconWrapper,
  scheduleHeaderWrapper,
  scheduleCalendarWrapper,
  scheduleCalendarDropDownWrapper,
  scheduleWrapper,
  scheduleTitleContainer,
  scheduleColorDivider,
  scheduleTitleWrapper,
  scheduleInvitationWrapper,
  scheduleTitleTimeWrapper,
  scheduleNoteWrapper,
  scheduleCalendarDropDownElipse,
  calendarElipseColor,
  scheduleTitleTimeColWrapper,
  dropdownContainer,
  dropdownDivider,
  deleteDropdownContainer,
} from './Schedule.css';

interface ScheduleProps {
  scheduleId: number;
  title: string;
  profileImgUrl: string | null;
  startDateTime: string;
  endDateTime: string;
  color: string;
  member: MemberProps[] | null;
  description: string | null;
}
// eslint-disable-next-line max-lines-per-function
export const Schedule = ({
  scheduleId,
  title,
  profileImgUrl,
  startDateTime,
  endDateTime,
  color,
  member,
  description,
}: ScheduleProps) => {
  const router = useRouter();
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeleteDropdownOpen, setIsDeletDropdownOpen] = useState(false);
  const handleDropdownOpen = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    if (getHours(startDateTime) >= 12) {
      setStartTime(`오후 ${getHours(startDateTime)}시 ${getMinutes(startDateTime)}분`);
    } else {
      setStartTime(`오전 ${getHours(startDateTime)}시 ${getMinutes(startDateTime)}분`);
    }
    if (getHours(endDateTime) >= 12) {
      setEndTime(`오후 ${getHours(endDateTime)}시 ${getMinutes(endDateTime)}분`);
    } else {
      setEndTime(`오전 ${getHours(endDateTime)}시 ${getMinutes(endDateTime)}분`);
    }
  }, []);

  const handleCloseClick = () => {
    router.push(`/my/timeline`);
  };
  const handleEditClick = () => {};
  const handleMoreClick = () => {
    setIsDeletDropdownOpen((prev) => !prev);
  };
  const handleNoteClick = () => {
    router.push('/schedule/1/note');
  };
  const handleCalendarToggleClick = () => {};
  const handleDeleteClick = async () => {};

  return (
    <section className={scheduleWrapper}>
      <header className={scheduleHeaderWrapper}>
        <button onClick={handleCloseClick}>
          <Icon name="close" size={32} />
        </button>
        <div className={scheduleHeaderIconWrapper}>
          <button onClick={handleEditClick}>
            <Icon name="pencil" size={28} />
          </button>
          <button onClick={handleMoreClick}>
            <Icon name="more" size={32} />
            {isDeleteDropdownOpen && (
              <Dropdown className={deleteDropdownContainer}>
                <Dropdown.Item
                  text="삭제하기"
                  onClick={handleDeleteClick}
                  rightAddon={<Icon name="delete" size={16} />}
                ></Dropdown.Item>
              </Dropdown>
            )}
          </button>
        </div>
      </header>
      <article className={scheduleTitleContainer}>
        <div className={scheduleTitleWrapper}>
          <div className={scheduleColorDivider} style={{ backgroundColor: '#58DB67 ' }}></div>
          <Txt typography="h5">{title}</Txt>
        </div>
        <div className={scheduleTitleTimeColWrapper}>
          <div className={scheduleTitleTimeWrapper}>
            <Txt typography="p1" fontWeight="regular" color={colors.gray950}>
              {format(startDateTime, 'yyyy. MM. dd')}
            </Txt>
            <Txt typography="p1" fontWeight="regular" color={colors.gray950}>
              {format(new Date(startDateTime), 'EEEE', { locale: ko })}
            </Txt>
            <Icon name="dot" size={2.67} />
            <Txt typography="p1" fontWeight="regular" color={colors.gray950}>
              {startTime}
            </Txt>
          </div>
          {/* <div className={scheduleTitleTimeWrapper}>
            <Txt typography="p1" fontWeight="regular" color={colors.gray950}>
              {format(endDateTime, 'yyyy. MM. dd')}
            </Txt>
            <Txt typography="p1" fontWeight="regular" color={colors.gray950}>
              {format(new Date(endDateTime), 'EEEE', { locale: ko })}
            </Txt>
            <Icon name="dot" size={2.67} />
            <Txt typography="p1" fontWeight="regular" color={colors.gray950}>
              {endTime}
            </Txt>
          </div> */}
        </div>
      </article>

      <List className={scheduleCalendarWrapper}>
        <List.Header
          title={'캘린더'}
          fontWeight="regular"
          color={`${colors.gray700}`}
          typograyphy="p1"
          rightAddon={
            <button>
              <div className={scheduleCalendarDropDownWrapper}>
                <div
                  className={clsx(scheduleCalendarDropDownElipse, calendarElipseColor.birthday)}
                ></div>
                <Txt typography="p1" fontWeight="medium">
                  직장
                </Txt>
                <button onClick={handleDropdownOpen}>
                  <Icon name="down" size={20} />
                </button>
                {isDropdownOpen && (
                  <Dropdown className={dropdownContainer}>
                    <Dropdown.Item
                      text="개인일정"
                      onClick={handleCalendarToggleClick}
                      rightAddon={
                        <div
                          className={clsx(
                            scheduleCalendarDropDownElipse,
                            calendarElipseColor.personal,
                          )}
                        ></div>
                      }
                    ></Dropdown.Item>
                    <div className={dropdownDivider}></div>
                    <Dropdown.Item
                      text="생일"
                      onClick={handleCalendarToggleClick}
                      rightAddon={
                        <div
                          className={clsx(
                            scheduleCalendarDropDownElipse,
                            calendarElipseColor.birthday,
                          )}
                        ></div>
                      }
                    ></Dropdown.Item>
                  </Dropdown>
                )}
              </div>
            </button>
          }
        />
      </List>
      <List className={scheduleInvitationWrapper}>
        <List.Header
          title={'초대받은 사람'}
          fontWeight="regular"
          color={`${colors.gray700}`}
          typograyphy="p1"
        />
        {member &&
          member.map((item) => (
            <div key={item.memberId}>
              <InvitionItem profileImg={item.profileImgUrl} name={item.name} />
            </div>
          ))}
      </List>
      <List className={scheduleNoteWrapper}>
        <List.Header
          title={'노트'}
          fontWeight="regular"
          color={`${colors.gray700}`}
          typograyphy="p1"
          rightAddon={
            <button type="button" onClick={handleNoteClick}>
              <Icon name="next" size={28} />
            </button>
          }
        />
        <div style={{ WebkitLineClamp: '8' }}>
          <Txt typography="p1" fontWeight="regular" color={colors.black}>
            {description}
          </Txt>
        </div>
      </List>
    </section>
  );
};

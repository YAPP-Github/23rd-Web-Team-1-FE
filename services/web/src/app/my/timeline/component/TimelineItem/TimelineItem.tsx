'use client';

import { Icon, List } from '@linker/lds';
import { Txt } from '@linker/lds';
import { Spacing } from '@linker/lds';
import { Dropdown } from '@linker/lds';
import { colors } from '@linker/styles';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  timelineItemContainer,
  timelineItemTimeDividerWrapper,
  timelineItemTimeDivider,
  timelineRowWrapper,
  timelineItemDivider,
  timelineItemInfoWrapper,
  timelineItemMemoWrapper,
  timelineColorDivider,
  timelineItemHeaderWrapper,
  dropdownContainer,
  dropdownDivider,
} from './TimelineItem.css';
import { useDeleteSchedule } from '../../hooks/useDeleteSchedule';
import { TimelineItemProps } from '../../types/schedule';

interface DropdownProps {
  dropdownClick: number;
  setDropdownClick: React.Dispatch<React.SetStateAction<number>>;
}

function TimelineItem({
  title,
  startDateTime,
  endDateTime,
  scheduleId,
  contacts,
  color,
  description,
  dropdownClick,
  setDropdownClick,
}: TimelineItemProps & DropdownProps) {
  const router = useRouter();
  const [time, setTime] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const deleteDataQuery = useDeleteSchedule();

  const handleDropdownClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setIsDropdownOpen((prev) => !prev);
    setDropdownClick(scheduleId);
  };

  const handleItemClick = (id: number) => {
    router.push(`/schedule/${id}`);
  };

  const handleEditClick = () => {
    /* @todo : 수정하기 화면으로 이동 */
  };
  const handleDeleteClick = () => {
    deleteDataQuery.mutate(scheduleId);
  };

  useEffect(() => {
    if (dropdownClick === scheduleId) {
      setIsDropdownOpen(true);
    }
  }, [dropdownClick, title]);

  useEffect(() => {
    if (parseInt(format(startDateTime, 'HH')) >= 12) {
      // setTime(`오후 ${format(startDateTime, 'HH:mm')} - ${format(endDateTime, 'HH:mm')}`);
    } else {
      // setTime(`오전 ${format(startDateTime, 'HH:mm')} - ${format(endDateTime, 'HH:mm')}`);
    }
  }, [startDateTime, endDateTime]);

  return (
    <section className={timelineItemContainer}>
      <div className={timelineItemTimeDividerWrapper}>
        <Txt typography="p4" color={colors.black} fontWeight="bold">
          {format(startDateTime, 'd')}
        </Txt>
        <Spacing size={2} />
        <Txt typography="p5" color={colors.gray700} fontWeight="bold">
          {format(new Date(startDateTime), 'EEEE', { locale: ko }).slice(0, 1)}
        </Txt>
        <Spacing size={8} />
        <div className={timelineItemTimeDivider}></div>
      </div>

      <List className={timelineItemInfoWrapper}>
        <List.Header
          title={
            <button onClick={() => handleItemClick(scheduleId)}>
              <Txt typography="p1" color={colors.black} fontWeight="bold">
                {title}
              </Txt>
            </button>
          }
          color={colors.black}
          typograyphy="h7"
          description={
            <>
              <div className={timelineRowWrapper}>
                <Icon name="time-gray" size={28} />
                <Txt typography="p3" color={colors.gray700} fontWeight="regular">
                  {time}
                </Txt>
              </div>

              {contacts && contacts.length > 0 && (
                <div className={timelineRowWrapper}>
                  <Icon name="user-gray" size={28} />
                  <Txt typography="p3" color={colors.gray700} fontWeight="regular">
                    {contacts[0].name}
                  </Txt>
                  {contacts.length >= 2 && (
                    <Txt typography="p3" color={colors.gray500} fontWeight="regular">
                      {`외 ${contacts.length}명`}
                    </Txt>
                  )}
                </div>
              )}
            </>
          }
          className={timelineItemHeaderWrapper}
          rightAddon={
            <div>
              <button type="button" onClick={handleDropdownClick}>
                <Icon name="more-gray" size={28} />
              </button>
              {dropdownClick === scheduleId && isDropdownOpen && (
                <Dropdown className={dropdownContainer}>
                  <Dropdown.Item
                    text="수정하기"
                    onClick={handleEditClick}
                    rightAddon={<Icon name="pencil" size={16} />}
                  ></Dropdown.Item>
                  <div className={dropdownDivider}></div>
                  <Dropdown.Item
                    text="삭제하기"
                    onClick={handleDeleteClick}
                    rightAddon={<Icon name="delete" size={16} />}
                  ></Dropdown.Item>
                </Dropdown>
              )}
            </div>
          }
          leftAddon={<div className={timelineColorDivider} style={{ backgroundColor: color }} />}
        />

        {description && (
          <div>
            <div className={timelineItemDivider}></div>
            <section className={timelineItemMemoWrapper}>
              <Txt typography="p2" color={colors.gray900} fontWeight="regular">
                {description}
              </Txt>
            </section>
          </div>
        )}
      </List>
    </section>
  );
}
export default TimelineItem;

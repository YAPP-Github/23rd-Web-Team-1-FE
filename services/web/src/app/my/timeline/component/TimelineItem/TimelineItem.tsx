'use client';
import { TimelineItemProps } from '@__server__/mocks/feed';
import { Icon, List } from '@linker/lds';
import { Txt } from '@linker/lds';
import { Spacing } from '@linker/lds';
import { Button } from '@linker/lds';
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
  floatingDivider,
} from './TimelineItem.css';

function TimelineItem({
  title,
  startDateTime,
  endDateTime,
  scheduleId,
  member,
  color,
  profileImgUrl,
  description,
}: TimelineItemProps) {
  const router = useRouter();
  const [time, setTime] = useState('');
  const [kebabClick, setKebabClick] = useState(false);
  const handleKebabClick = () => {
    setKebabClick((prev) => !prev);
  };
  const handleItemClick = (id: number) => {
    router.push(`/schedule/${id}`);
  };

  useEffect(() => {
    if (parseInt(format(startDateTime, 'HH')) >= 12) {
      setTime(`오후 ${format(startDateTime, 'HH:mm')} - ${format(endDateTime, 'HH:mm')}`);
    } else {
      setTime(`오전 ${format(startDateTime, 'HH:mm')} - ${format(endDateTime, 'HH:mm')}`);
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

              {/* {member !== null && member.length > 0 && (
                <div className={timelineRowWrapper}>
                  <Icon name="user-gray" size={28} />
                  <Txt typography="p3" color={colors.gray700} fontWeight="regular">
                    {member[0].name}
                  </Txt>
                  {member.length >= 2 && (
                    <Txt typography="p3" color={colors.gray500} fontWeight="regular">
                      {`외 ${member.length - 1}명`}
                    </Txt>
                  )}
                </div>
              )} */}
            </>
          }
          className={timelineItemHeaderWrapper}
          rightAddon={
            <div>
              <button type="button" onClick={handleKebabClick}>
                <Icon name="more-gray" size={28} />
              </button>
              {kebabClick && (
                <Button.Floating>
                  <Button.Floating.Item
                    text="수정하기"
                    rightAddon={<Icon name="pencil" size={16} />}
                  ></Button.Floating.Item>
                  <div className={floatingDivider}></div>
                  <Button.Floating.Item
                    text="삭제하기"
                    rightAddon={<Icon name="delete" size={16} />}
                  ></Button.Floating.Item>
                </Button.Floating>
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

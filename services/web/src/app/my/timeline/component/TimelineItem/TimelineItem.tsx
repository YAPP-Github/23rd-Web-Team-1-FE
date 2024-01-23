import { Icon, List } from '@linker/lds';
import { Txt } from '@linker/lds';
import { colors } from '@linker/styles';

import {
  timelineRowWrapper,
  timelineItemDivider,
  timelineItemHashtagWrapper,
  timelineItmeInfoWrapper,
  timelineItemMemoWrapper,
  timelineItemHashtagBoxWrapper,
} from './TimelineItem.css';

interface TimelineItemProps {
  title: string;
  time: string;
  member: string;
  hashtag: string[];
  memo: string;
}

function TimelineItem({ title, time, member, hashtag, memo }: TimelineItemProps) {
  return (
    <List>
      <List.Header
        title={title}
        rightAddon={
          <button type="button">
            <Icon name="more-gray" size={28} />
          </button>
        }
      />
      <section className={timelineItmeInfoWrapper}>
        <div className={timelineRowWrapper}>
          <Icon name="more-gray" size={28} />
          <Txt typography="p3" color={colors.gray700} fontWeight="regular">
            {time}
          </Txt>
        </div>
        <div className={timelineRowWrapper}>
          <Icon name="more-gray" size={28} />
          <Txt typography="p3" color={colors.gray700} fontWeight="regular">
            {member}
          </Txt>
        </div>
      </section>
      {hashtag && (
        <section className={timelineItemHashtagWrapper}>
          {hashtag.map((item) => (
            <div className={timelineItemHashtagBoxWrapper} key={item}>
              <Txt typography="p4" color={colors.gray700} fontWeight="regular">
                {item}
              </Txt>
            </div>
          ))}
        </section>
      )}
      {memo && (
        <div>
          <div className={timelineItemDivider}></div>
          <section className={timelineItemMemoWrapper}>
            <Txt typography="p2" color={colors.gray900} fontWeight="regular">
              {memo}
            </Txt>
          </section>
        </div>
      )}
    </List>
  );
}
export default TimelineItem;

import { colors } from '@linker/styles';
import { Typography } from '@linker/styles/types';
import { FontWeight } from '@linker/styles/types';
import clsx from 'clsx';
import { ReactNode } from 'react';

import { headerContainer, headerTitle, iconWrapper } from './ListHeader.css';
import { Txt } from '../Txt';

interface Props {
  title: ReactNode;
  typograyphy?: Typography;
  color?: string;
  fontWeight?: FontWeight;
  description?: ReactNode;
  icon?: ReactNode;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  className?: string;
}

const ListHeader = ({
  title,
  typograyphy,
  color,
  fontWeight,
  description,
  icon,
  leftAddon,
  rightAddon,
  className,
}: Props) => {
  return (
    <div className={clsx(headerContainer, className)}>
      {leftAddon}

      <div className={headerTitle}>
        <div>
          <Txt as="h1" typography={typograyphy} color={color} fontWeight={fontWeight}>
            {icon != null && <span className={iconWrapper}>{icon}</span>}
            {title}
          </Txt>

          <Txt as="p" typography="p3" color={colors.gray950}>
            {description}
          </Txt>
        </div>

        <div>{rightAddon}</div>
      </div>
    </div>
  );
};

export default ListHeader;

import { colors } from '@linker/styles';
import clsx from 'clsx';
import { ReactNode } from 'react';

import { headerContainer, headerTitle, iconWrapper } from './ListHeader.css';
import { Txt } from '../Txt';

interface Props {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  className?: string;
}

const ListHeader = ({ title, description, icon, leftAddon, rightAddon, className }: Props) => {
  return (
    <div className={clsx(headerContainer, className)}>
      {leftAddon}

      <div className={headerTitle}>
        <div>
          <Txt as="h1" typography="h7">
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

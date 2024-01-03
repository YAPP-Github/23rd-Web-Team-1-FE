'use client';

import { colors } from '@linker/styles';
import { ReactNode } from 'react';

import { headerContainer, headerTitle, iconWrapper } from './ListHeader.css';
import { Txt } from '../Txt';

interface Props {
  title: string;
  description?: string;
  icon?: ReactNode;
  rightAddon?: ReactNode;
}

const ListHeader = ({ title, description, icon, rightAddon }: Props) => {
  return (
    <div className={headerContainer}>
      <div className={headerTitle}>
        <Txt as="h1" typography="h7">
          {icon != null && <span className={iconWrapper}>{icon}</span>}
          {title}
        </Txt>

        {rightAddon}
      </div>

      <Txt as="p" typography="p3" color={colors.grey050}>
        {description}
      </Txt>
    </div>
  );
};

export default ListHeader;

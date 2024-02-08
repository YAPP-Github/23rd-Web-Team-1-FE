'use client';

import clsx from 'clsx';
import Link from 'next/link';

import { Icon } from '@linker/lds';

import { headerContainer, rightItem } from './Header.css';

interface Props {
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  className?: string;
}

const Header = ({ leftAddon, rightAddon, className }: Props) => {
  return (
    <header className={clsx(headerContainer, className)}>
      {leftAddon ? (
        <>{leftAddon}</>
      ) : (
        <Link href="/my/feed">
          <Icon name="logo" size={72} height={24} />
        </Link>
      )}

      <div className={rightItem}>{rightAddon}</div>
    </header>
  );
};

export default Header;

'use client';

import clsx from 'clsx';
import Link from 'next/link';

import { Icon } from '@linker/lds';

import { headerContainer, rightItem } from './Header.css';

interface Props {
  leftAddon?: React.ReactNode;
  className?: string;
}

const Header = ({ leftAddon, className }: Props) => {
  return (
    <header className={clsx(headerContainer, className)}>
      {leftAddon ? (
        <>{leftAddon}</>
      ) : (
        <Link href="/my/feed">
          <Icon name="logo" size={72} height={24} />
        </Link>
      )}
      <div className={rightItem}>
        <Icon name="share-white" />
        <Icon name="list-white" />
      </div>
    </header>
  );
};

export default Header;

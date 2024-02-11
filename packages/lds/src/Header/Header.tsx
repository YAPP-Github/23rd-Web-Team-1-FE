'use client';

import clsx from 'clsx';
import Link from 'next/link';

import { Logo } from '@linker/lds';

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
          <Logo />
        </Link>
      )}

      <div className={rightItem}>{rightAddon}</div>
    </header>
  );
};

export default Header;

'use client';

import { useIsScrollOver } from '@linker/react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';
import { ReactNode, forwardRef } from 'react';

import { container, displayVar, headerContainer } from './FixedHeader.css';
import Header from './Header';
import { HEADER_HEIGHT_NUMBER, TAB_HEIGHT_NUMBER } from '../constants';

interface HeaderProps {
  children: ReactNode;
  leftAddon?: ReactNode;
  className?: string;
}

const MINIMIZE_SCROLL = HEADER_HEIGHT_NUMBER + TAB_HEIGHT_NUMBER + 15;

const FixedHeader = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, leftAddon, className }: HeaderProps, ref) => {
    const isScrollOver = useIsScrollOver(MINIMIZE_SCROLL);

    return (
      <div
        ref={ref}
        aria-hidden
        className={clsx(container, className)}
        style={assignInlineVars(displayVar, {
          display: isScrollOver ? 'block' : 'none',
        })}
      >
        <Header leftAddon={leftAddon} className={headerContainer} />

        {children}
      </div>
    );
  },
);

export default FixedHeader;

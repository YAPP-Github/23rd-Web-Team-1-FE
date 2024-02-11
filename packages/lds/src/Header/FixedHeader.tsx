'use client';

import { useIsScrollOver } from '@linker/react';
import { colors } from '@linker/styles';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';
import { ReactNode, forwardRef } from 'react';

import { container, styleVar, headerContainer } from './FixedHeader.css';
import Header from './Header';
import { HEADER_HEIGHT_NUMBER, TAB_HEIGHT_NUMBER } from '../constants';

interface HeaderProps {
  children: ReactNode;
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
  className?: string;
  bgColor?: string;
  scrollOver?: number;
}

const MINIMIZE_SCROLL = HEADER_HEIGHT_NUMBER + TAB_HEIGHT_NUMBER + 15;

const FixedHeader = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, leftAddon, rightAddon, className, bgColor, scrollOver = 0 }: HeaderProps, ref) => {
    const isScrollOver = useIsScrollOver(MINIMIZE_SCROLL + scrollOver ?? MINIMIZE_SCROLL);

    return (
      <div
        ref={ref}
        aria-hidden
        className={clsx(container, className)}
        style={assignInlineVars(styleVar, {
          display: isScrollOver ? 'block' : 'none',
          background: bgColor ?? colors.gradationBlue,
        })}
      >
        <Header leftAddon={leftAddon} rightAddon={rightAddon} className={headerContainer} />

        {children}
      </div>
    );
  },
);

export default FixedHeader;

'use client';

import { forwardRef } from 'react';

import { groupContainer } from './Chip.css';
import { HorizonScroller } from '../HorizonScroller';

interface Props {
  children: React.ReactNode;
}

const ChipGroup = forwardRef<HTMLDivElement, Props>(({ children }: Props, ref) => {
  return (
    <HorizonScroller>
      <div ref={ref} className={groupContainer}>
        {children}
      </div>
    </HorizonScroller>
  );
});

export default ChipGroup;

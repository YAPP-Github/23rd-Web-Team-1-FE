'use client';

import clsx from 'clsx';
import { useLayoutEffect, useRef } from 'react';

import { horizonScroller } from './HorizonScroller.css';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const ChipGroup = ({ className, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (element == null) {
      return;
    }

    const handleScroll = (ev: WheelEvent) => {
      ev.preventDefault();
      element.scrollLeft += ev.deltaY + ev.deltaX;
    };

    element.addEventListener('wheel', handleScroll);

    return () => {
      element.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className={clsx(horizonScroller, className)}>
      {children}
    </div>
  );
};

export default ChipGroup;

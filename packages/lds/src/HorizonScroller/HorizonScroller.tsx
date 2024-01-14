'use client';

import { useLayoutEffect, useRef } from 'react';

import { horizonScroller } from './HorizonScroller.css';

interface Props {
  children: React.ReactNode;
}

const ChipGroup = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

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
    <div ref={ref} className={horizonScroller}>
      {children}
    </div>
  );
};

export default ChipGroup;

import clsx from 'clsx';
import React, { forwardRef } from 'react';
import type { Ref } from 'react';

import { swiperContainer, itemWrapper } from './Swiper.css';

interface SwiperProps {
  children: React.ReactNode;
  className?: string
}

function Swiper({ children, className }: SwiperProps, ref: Ref<HTMLDivElement>) {
  return (
    <div ref={ref} className={clsx(swiperContainer, className)}>
      <ul className={itemWrapper}>
        {children}
      </ul>
    </div>
  );
}

export default forwardRef(Swiper);

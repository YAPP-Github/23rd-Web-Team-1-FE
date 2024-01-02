import React from 'react';

import { swiperContainer, itemWrapper } from './Swiper.css';

interface SwiperProps {
  children: React.ReactNode;
}

function Swiper({ children }: SwiperProps) {
  return (
    <div className={swiperContainer}>
      <ul className={itemWrapper}>
        {children}
      </ul>
    </div>
  );
}

export default Swiper;

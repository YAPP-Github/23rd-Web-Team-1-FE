import React from 'react';

import { item } from './SwiperItem.css';

interface SwiperItemProps {
  children: React.ReactNode;
}

function SwiperItem({ children }: SwiperItemProps) {
  return (
    <li className={item}>{children}</li>
  );
}

export default SwiperItem;

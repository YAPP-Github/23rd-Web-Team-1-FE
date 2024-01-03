import clsx from 'clsx';
import React from 'react';

import { item } from './SwiperItem.css';

interface SwiperItemProps {
  children: React.ReactNode;
  className?: string
}

function SwiperItem({ children, className }: SwiperItemProps) {
  return (
    <li className={clsx(item, className)}>{children}</li>
  );
}

export default SwiperItem;

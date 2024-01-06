import clsx from 'clsx';
import React from 'react';

import { item } from './CarouselItem.css';

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string
}

function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <li className={clsx(item, className)}>{children}</li>
  );
}

export default CarouselItem;

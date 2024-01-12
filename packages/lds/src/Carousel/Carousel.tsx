'use client';

import clsx from 'clsx';
import React, { useState, useRef, Children } from 'react';
import { useThrottledCallback } from 'use-debounce';

import {
  carouselContainer,
  carouselWrapper,
  itemWrapper,
  dotsWrapper,
  activeStyle,
  dot,
} from './Carousel.css';
import CarouselItem from './CarouselItem';

interface CarouselProps {
  children: Array<React.ReactElement<typeof CarouselItem>>;
  className?: string;
  onSwipe?: (index: number) => void;
}

const Carousel = ({ children, className, onSwipe }: CarouselProps) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const scrollWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useThrottledCallback(() => {
    if (!scrollWrapperRef.current) {
      return;
    }

    const scrollLeft = scrollWrapperRef.current.scrollLeft;
    const clientWidth = scrollWrapperRef.current.clientWidth;

    const newItemIndex = Math.floor((scrollLeft + clientWidth / 2) / clientWidth);

    if (currentItemIndex !== newItemIndex) {
      setCurrentItemIndex(newItemIndex);
      onSwipe?.(newItemIndex);
    }
  }, 100);

  return (
    <div className={clsx(carouselContainer, className)}>
      <div ref={scrollWrapperRef} className={carouselWrapper} onScroll={handleScroll}>
        <ul className={itemWrapper}>{children}</ul>
      </div>
      <div className={dotsWrapper}>
        {Children.map(children, (_, index) => (
          <div className={clsx(dot, index === currentItemIndex && activeStyle)} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

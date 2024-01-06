import clsx from 'clsx';
import React, { useState, useRef } from 'react';
import { useThrottledCallback } from 'use-debounce';

import { carouselContainer, itemWrapper } from './Carousel.css';

interface CarouselProps {
  children: React.ReactNode;
  className?: string
  onSwipe?: (index: number) => void
}

const Carousel = ({ children, className, onSwipe }: CarouselProps) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const scrollWrapperRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = useThrottledCallback(() => {
    if (!scrollWrapperRef.current) {
      return
    }

    const scrollLeft = scrollWrapperRef.current.scrollLeft
    const clientWidth = scrollWrapperRef.current.clientWidth

    const newItemIndex = Math.floor((scrollLeft + clientWidth / 2) / clientWidth)

    if (currentItemIndex !== newItemIndex) {
      setCurrentItemIndex(newItemIndex)
      onSwipe?.(newItemIndex)
    }
  }, 100)

  return (
    <div
      ref={scrollWrapperRef}
      className={clsx(carouselContainer, className)}
      onScroll={handleScroll}
    >
      <ul className={itemWrapper}>
        {children}
      </ul>
    </div>
  );
}

export default Carousel;

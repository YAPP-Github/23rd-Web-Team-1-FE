'use client';

import clsx from 'clsx';
import React, { useState, useRef } from 'react';

import { swiperContainer, itemWrapper } from './Swiper.css';

interface SwiperProps {
  children: React.ReactNode;
  className?: string
  onSwipe?: (index: number) => void
}

const Swiper = ({ children, className, onSwipe }: SwiperProps) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const scrollWrapperRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
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
  }

  return (
    <div
      ref={scrollWrapperRef}
      className={clsx(swiperContainer, className)}
      onScroll={handleScroll}
    >
      <ul className={itemWrapper}>
        {children}
      </ul>
    </div>
  );
}

export default Swiper;

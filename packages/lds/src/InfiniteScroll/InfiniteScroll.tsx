'use client';

import React, { useEffect, useRef } from 'react';

import { wrapper } from './InfiniteScroll.css';

interface InfiniteScrollProps {
  children: React.ReactNode;
  onLoadMore?: () => void;
}

function InfiniteScroll({ children, onLoadMore }: InfiniteScrollProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!targetRef.current) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      const targetEntry = entries[0];

      if (targetEntry && targetEntry.isIntersecting) {
        onLoadMore?.();
      }
    });

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [onLoadMore]);

  return (
    <div className={wrapper}>
      {children}
      <div ref={targetRef} />
    </div>
  );
}

export default InfiniteScroll;

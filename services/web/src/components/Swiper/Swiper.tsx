'use client'

import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import type { Ref } from 'react'
import SwiperItem from './SwiperItem'
import { screenWrapper, scrollSnap, itemWrapper } from './Swiper.css'
import { smoothScroll } from './utils/smoothScroll'

interface SwiperProps {
  children: React.ReactElement<typeof SwiperItem>[]
}

export interface SwiperRefProps {
  moveTo: (index: number) => void
}

function Swiper({ children }: SwiperProps, forwardedRef: Ref<SwiperRefProps>) {
  const [wrapperWidth, setWrapperWidth] = useState<number>(0)
  const [isProgmmaticScrolling, setProgmmaticScrolling] = useState(false)
  const wrapperRef = useRef<HTMLElement>(null)

  const moveTo = (index: number) => {
    if (!wrapperRef.current) { return }

    setProgmmaticScrolling(true)

    smoothScroll({
      start: wrapperRef.current.scrollLeft,
      end: wrapperWidth * index,
      onScrolling: (scrollLeft) => {
        if (!wrapperRef.current) { return }

        wrapperRef.current.scrollLeft = scrollLeft
      },
      onScrollEnd: () => {
        setProgmmaticScrolling(false)
      }
    })
  }

  useEffect(() => {
    if (!wrapperRef.current) { return }
    setWrapperWidth(wrapperRef.current.clientWidth)
  }, [])

  useImperativeHandle(forwardedRef, () => ({
    moveTo,
  }))

  return (
    <section className={`${screenWrapper} ${!isProgmmaticScrolling ? scrollSnap : ''}`} ref={wrapperRef}>
      <div className={itemWrapper}>
        {children}
      </div>
    </section>
  )
}

export default forwardRef(Swiper)

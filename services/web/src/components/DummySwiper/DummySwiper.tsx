'use client'

import { useRef, useEffect } from 'react'

import { Swiper, SwiperItem, SwiperRefProps } from '@/components/Swiper'
import { swiperWrapper } from './DummySwiper.css'

/**
 * @author danivelop
 * @description Carousel 사용예시를 위해 작성한 컴포넌트. 추후 삭제 예정
 */
function DummySwiper() {
  const swiperRef = useRef<SwiperRefProps>(null)

  useEffect(() => {
    setTimeout(() => {
      if (!swiperRef.current) { return }
      swiperRef.current.moveTo(1)
    }, 1000)
  }, [])

  return (
    <div className={swiperWrapper}>
      <Swiper ref={swiperRef}>
        <SwiperItem>page1</SwiperItem>
        <SwiperItem>page2</SwiperItem>
        <SwiperItem>page3</SwiperItem>
      </Swiper>
    </div>
  )
}

export default DummySwiper
import React from 'react'
import SwiperItem from './SwiperItem'
import { screenWrapper, itemWrapper } from './Swiper.css'

interface SwiperProps {
  children: React.ReactElement<typeof SwiperItem>[]
}

function Swiper({ children }: SwiperProps) {
  return (
    <article className={screenWrapper}>
      <div className={itemWrapper}>
        {children}
      </div>
    </article>
  )
}

export default Swiper

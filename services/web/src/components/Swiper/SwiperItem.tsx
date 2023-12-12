import React from 'react'
import { item } from './SwiperItem.css'

interface SwiperItemProps {
  children: React.ReactNode
}

function SwiperItem({ children }: SwiperItemProps) {
  return (
    <article className={item}>{children}</article>
  )
}

export default SwiperItem
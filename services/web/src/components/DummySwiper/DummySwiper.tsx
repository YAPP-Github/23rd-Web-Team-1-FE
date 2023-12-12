import { Swiper, SwiperItem } from '@/components/Swiper'
import { swiperWrapper } from './DummySwiper.css'

/**
 * @author danivelop
 * @description Carousel 사용예시를 위해 작성한 컴포넌트. 추후 삭제 예정
 */
function DummySwiper() {
  return (
    <div className={swiperWrapper}>
      <Swiper>
        <SwiperItem>page1</SwiperItem>
        <SwiperItem>page2</SwiperItem>
        <SwiperItem>page2</SwiperItem>
      </Swiper>
    </div>
  )
}

export default DummySwiper
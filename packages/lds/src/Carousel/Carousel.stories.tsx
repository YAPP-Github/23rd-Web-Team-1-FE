import { Meta, StoryObj } from '@storybook/react';

import Carousel from './Carousel';
import { wrapper, box } from './Carousel.stories.css'
import SwiperItem from './CarouselItem';

const meta: Meta<typeof Carousel> = {
  title: 'Swiper',
  component: Carousel,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Template: Story = {
  render: () => {
    const handleSwipe = (index: number) => {
      // eslint-disable-next-line no-console
      console.log('index', index)
    }

    return (
      <div className={wrapper}>
        <Carousel onSwipe={handleSwipe}>
          <SwiperItem>
            <div className={box}>1</div>
          </SwiperItem>
          <SwiperItem>
            <div className={box}>2</div>
          </SwiperItem>
          <SwiperItem>
            <div className={box}>3</div>
          </SwiperItem>
        </Carousel>
      </div >
    )
  }
};

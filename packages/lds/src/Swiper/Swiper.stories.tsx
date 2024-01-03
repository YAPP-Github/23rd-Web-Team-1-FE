import { Meta, StoryObj } from '@storybook/react';

import Swiper from './Swiper';
import { wrapper, item } from './Swiper.stories.css'
import SwiperItem from './SwiperItem';

const meta: Meta<typeof Swiper> = {
  title: 'Swiper',
  component: Swiper,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Swiper>;

export const Template: Story = {
  render: () => {
    return (
      <div className={wrapper}>
        <Swiper>
          <SwiperItem className={item}>1</SwiperItem>
          <SwiperItem className={item}>2</SwiperItem>
          <SwiperItem className={item}>3</SwiperItem>
        </Swiper>
      </div >
    )
  }
};

import { Meta, StoryObj } from '@storybook/react';

import Profile from './Profile';
import { Spacing } from '../Spacing';

const meta: Meta<typeof Profile> = {
  title: 'Profile',
  component: Profile,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Template: Story = {
  render: () => {
    return (
      <>
        {/* 기본 이미지 */}
        <Profile />

        <Spacing size={16} />

        {/* 샘플 이미지 */}
        <Profile
          imageUrl="https://static.im-linker.com/images/profile-sample.png"
          alt="샘플 이미지"
        />
      </>
    );
  },
};

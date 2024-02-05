import { Meta, StoryObj } from '@storybook/react';

import Skeleton from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Template: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Skeleton style={{ width: '6.4rem', height: '6.4rem', borderRadius: '2.4rem' }} />

        <div style={{ padding: '0.8rem 0' }}>
          <Skeleton style={{ width: '8rem', height: '2.6rem', marginBottom: '0.4rem' }} />
          <Skeleton style={{ width: '17rem', height: '1.8rem' }} />
        </div>
      </div>
    );
  },
};

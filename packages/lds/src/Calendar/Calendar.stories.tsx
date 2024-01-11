import { Meta, StoryObj } from '@storybook/react';

import Calendar from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Calendar',
  component: Calendar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Template: Story = {
  render: () => {
    return <Calendar value={new Date()} withModeChange />;
  },
};

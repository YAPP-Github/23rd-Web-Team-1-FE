import { Meta, StoryObj } from '@storybook/react';

import List from './List';
import ListRow from './ListRow';
import { Spacing } from '../Spacing';
import { Txt } from '../Txt';

const meta: Meta<typeof ListRow> = {
  title: 'ListRow',
  component: ListRow,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ListRow>;

export const Template: Story = {
  render: () => {
    return (
      <div style={{ padding: '100px', backgroundColor: '#f1f3f5' }}>
        <List.Row content={<Txt typography="p1">컨텐츠 1</Txt>} withArrow />
        <Spacing size={12} />
        <List.Row content={<Txt typography="p1">컨텐츠 2</Txt>} withArrow />
        <Spacing size={12} />
        <List.Row content={<Txt typography="p1">컨텐츠 3</Txt>} withArrow />
      </div>
    );
  },
};

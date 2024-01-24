import { Meta, StoryObj } from '@storybook/react';

import List from './List';
import { Icon } from '../Icon';
import { Spacing } from '../Spacing';
import { Txt } from '../Txt';

const meta: Meta<typeof List> = {
  title: 'List',
  component: List,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof List>;

export const Template: Story = {
  render: () => {
    return (
      <div style={{ padding: '100px', backgroundColor: '#f1f3f5' }}>
        <List>
          <List.Header
            title="다가오는 일정 확인하기"
            description="다가오는 일정을 확인하고 대화 주제를 확인해보세요."
            rightAddon={
              <button type="button">
                <Icon name="arrow" />
              </button>
            }
          />

          <List.Row content={<Txt typography="p1">컨텐츠 1</Txt>} withArrow />
          <Spacing size={12} />
          <List.Row content={<Txt typography="p1">컨텐츠 2</Txt>} withArrow />
          <Spacing size={12} />
          <List.Row content={<Txt typography="p1">컨텐츠 3</Txt>} withArrow />
        </List>

        <Spacing size={24} />

        <List>
          <List.Header
            title="커피챗 진행"
            rightAddon={
              <button type="button">
                <Icon name="arrow" />
              </button>
            }
          />
          Content
        </List>

        <Spacing size={24} />

        <List>Content</List>
      </div>
    );
  },
};

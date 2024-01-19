import { Meta, StoryObj } from '@storybook/react';

import SearchInput from './SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Template: Story = {
  render: () => {
    const onSubmit = () => {};

    return (
      <form onSubmit={onSubmit}>
        <SearchInput placeholder="연락처 검색하기" />
      </form>
    );
  },
};

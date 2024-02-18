import { colors } from '@linker/styles';
import { Meta, StoryObj } from '@storybook/react';

import TextArea from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'TextArea',
  component: TextArea,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Template: Story = {
  render: () => {
    return (
      <div style={{ maxWidth: '400px', padding: '20px', backgroundColor: `${colors.background}` }}>
        <TextArea
          label="노트"
          placeholder="간단한 정보를 작성해주세요"
          errorMessage="최대 400자까지 입력할 수 있어요."
        />
      </div>
    );
  },
};

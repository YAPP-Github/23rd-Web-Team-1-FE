import { colors } from '@linker/styles';
import { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Template: Story = {
  render: () => {
    return (
      <div style={{ maxWidth: '400px', padding: '20px', backgroundColor: `${colors.background}` }}>
        <Input
          label="이름"
          placeholder="이름을 입력해주세요"
          errorMessage="한글, 영문, 숫자, 공백 2~20자까지 입력할수 있어요."
        />

        <br />

        <Input
          label="전화번호"
          placeholder="전화번호를 입력해주세요"
          errorMessage="숫자만 입력할 수 있어요."
        />
      </div>
    );
  },
};

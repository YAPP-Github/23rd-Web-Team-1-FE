import { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const COMPONENT_DESCRIPTION = `
  - \`<Button />\`: 기본 버튼 컴포넌트
  - \`<Button.FAB />\`: Floating Action Button 컴포넌트
`;

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: COMPONENT_DESCRIPTION,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: () => {
    return <Button />;
  },
};

export const FAB: Story = {
  render: () => {
    return (
      <div style={{ width: '100%', height: '30rem' }}>
        <Button.FAB
          iconUrl="https://static.im-linker.com/plus-white.svg"
          type="default"
          style={{ position: 'absolute', bottom: '7rem' }}
        />

        <br />

        <Button.FAB
          iconUrl="https://static.im-linker.com/plus-white.svg"
          text="일정을 등록해보세요"
          type="extand"
        />
      </div>
    );
  },
};

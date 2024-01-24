import { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { Icon } from '../Icon';

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
        <Button.FAB type="default" style={{ position: 'absolute', bottom: '7rem' }}>
          <Icon name="plus-white" />
        </Button.FAB>

        <br />

        <Button.FAB text="일정을 등록해보세요" type="extand">
          <Icon name="plus-white" />
        </Button.FAB>
      </div>
    );
  },
};

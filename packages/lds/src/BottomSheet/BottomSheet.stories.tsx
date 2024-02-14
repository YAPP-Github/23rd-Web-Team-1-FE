import { Meta, StoryObj } from '@storybook/react';

import BottomSheet from './BottomSheet';
import { Button } from '../Button';
import { List } from '../List';
import { Txt } from '../Txt';

const COMPONENT_DESCRIPTION = `
  - \`<BottomSheet></BottomSheet>\`: 바텀싯 컴포넌트
  - \`<BottomSheet.Trigger />\`: 바텀싯 트리거 컴포넌트
  - \`<BottomSheet.Content />\`: 바텀싯 컨텐츠 컴포넌트
`;

const meta: Meta<typeof BottomSheet> = {
  title: 'BottomSheet',
  component: BottomSheet,
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

type Story = StoryObj<typeof BottomSheet>;

export const Basic: Story = {
  render: () => {
    return (
      <div style={{ height: '500px' }}>
        <List>
          <BottomSheet height={300}>
            <BottomSheet.Trigger>
              <Button>BottomSheet Trigger</Button>
            </BottomSheet.Trigger>
            <BottomSheet.Content>
              <Txt typography="p3">BottomSheet Content</Txt>
            </BottomSheet.Content>
          </BottomSheet>
        </List>
      </div>
    );
  },
};

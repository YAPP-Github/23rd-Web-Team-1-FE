import { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';
import { Button } from '../Button';
import { List } from '../List';
import { Txt } from '../Txt';

const COMPONENT_DESCRIPTION = `
  - \`<Modal></Modal>\`: 모달 컴포넌트
  - \`<Modal.Trigger />\`: 모달 트리거 컴포넌트
  - \`<Modal.Content />\`: 모달 컨텐츠 컴포넌트
  - \`<Modal.Bottom />\`: 모달 하단에 들어갈 컴포넌트. 주로 CTA 버튼이 들어감
`;

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
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

type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
  render: () => {
    return (
      <div style={{ height: '400px' }}>
        <List>
          <Modal>
            <Modal.Trigger>
              <Button>Modal Trigger</Button>
            </Modal.Trigger>
            <Modal.Content>
              <List>
                <Txt typography="p3">Modal Content</Txt>
              </List>
              <List>
                <Txt typography="p3">Modal Content</Txt>
              </List>
              <List>
                <Txt typography="p3">Modal Content</Txt>
              </List>

              <Modal.Bottom>
                <Button.KakaoLogin onClick={() => null} />
              </Modal.Bottom>
            </Modal.Content>
          </Modal>
        </List>
      </div>
    );
  },
};

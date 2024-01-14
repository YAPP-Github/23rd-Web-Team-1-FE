import { colors } from '@linker/styles';
import { Meta, StoryObj } from '@storybook/react';

import Chip from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Chip',
  component: Chip,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Template: Story = {
  render: () => {
    return (
      <div style={{ maxWidth: '400px', padding: '20px', backgroundColor: `${colors.background}` }}>
        <h3>Chip</h3>
        <Chip>Linker</Chip>
        <Chip variant="outlined">Linker</Chip>

        <br />
        <br />
        <br />
        <br />

        <h3>Chip Group</h3>
        <Chip.Group>
          {[1, 2, 3, 4, 5, 6, 7].map((item) => {
            return <Chip key={item}>Linker</Chip>;
          })}
        </Chip.Group>
      </div>
    );
  },
};

import { Meta, StoryObj } from '@storybook/react';

import Txt from './Txt';

const meta: Meta<typeof Txt> = {
  title: 'Txt',
  component: Txt,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Txt>;

export const Template: Story = {
  render: () => {
    return (
      <>
        <Txt typography="h1">h1 Linker</Txt>
        <br />
        <Txt typography="h2">h2 Linker</Txt>
        <br />
        <Txt typography="h3">h3 Linker</Txt>
        <br />
        <Txt typography="h4">h4 Linker</Txt>
        <br />
        <Txt typography="h5">h5 Linker</Txt>
        <br />
        <Txt typography="h6">h6 Linker</Txt>
        <br />
        <Txt typography="h7">h7 Linker</Txt>
        <br />
        <Txt typography="p1">p1 Linker</Txt>
        <br />
        <Txt typography="p2">p2 Linker</Txt>
        <br />
        <Txt typography="p3">p3 Linker</Txt>
        <br />
        <Txt typography="p4">p4 Linker</Txt>
        <br />
        <Txt typography="b1">b1 Linker</Txt>
        <br />
      </>
    );
  },
};

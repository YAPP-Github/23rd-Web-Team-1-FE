import { colors } from '@linker/styles';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import { chipContainer } from './Chip.css';
import ChipGroup from './ChipGroup';
import { Txt } from '../Txt';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  selected?: boolean;
  className?: string;
}

const Chip = ({ children, selected = false, className, ...props }: Props) => {
  return (
    <button
      type="button"
      className={clsx(chipContainer({ variant: selected ? 'default' : 'outlined' }), className)}
      {...props}
    >
      <Txt typography="b2" color={selected ? colors.gray200 : colors.gray950}>
        {children}
      </Txt>
    </button>
  );
};

export default Object.assign(Chip, { Group: ChipGroup });

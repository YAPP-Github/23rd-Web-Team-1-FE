import { colors } from '@linker/styles';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import { chipContainer } from './Chip.css';
import ChipGroup from './ChipGroup';
import { Txt } from '../Txt';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'default' | 'outlined';
  className?: string;
}

const Chip = ({ children, variant = 'default', className, ...props }: Props) => {
  return (
    <button type="button" className={clsx(chipContainer({ variant }), className)} {...props}>
      <Txt typography="b2" color={variant === 'outlined' ? colors.gray950 : colors.gray200}>
        {children}
      </Txt>
    </button>
  );
};

export default Object.assign(Chip, { Group: ChipGroup });

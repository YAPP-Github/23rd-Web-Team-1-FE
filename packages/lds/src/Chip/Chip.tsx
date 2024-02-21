import { colors } from '@linker/styles';
import clsx from 'clsx';
import { HTMLAttributes } from 'react';

import { chipContainer, deleteButton } from './Chip.css';
import ChipGroup from './ChipGroup';
import { Icon } from '../Icon';
import { Txt } from '../Txt';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  selected?: boolean;
  className?: string;
  onDelete?: () => void;
}

const Chip = ({ children, selected = false, className, onDelete, ...props }: Props) => {
  return (
    <button
      type="button"
      className={clsx(chipContainer({ variant: selected ? 'default' : 'outlined' }), className)}
      {...props}
    >
      <Txt typography="b2" color={selected ? colors.gray200 : colors.gray950}>
        {children}
      </Txt>

      {onDelete != null && (
        <Icon
          name="close-gray"
          role="presentation"
          size={16}
          className={deleteButton}
          onClick={onDelete}
        />
      )}
    </button>
  );
};

export default Object.assign(Chip, { Group: ChipGroup });

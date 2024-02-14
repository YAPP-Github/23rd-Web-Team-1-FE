import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';

import { container, heightVar } from './Spacing.css';

interface Props {
  size: number;
  className?: string;
}

const Spacing = ({ size, className }: Props) => {
  return (
    <div
      aria-hidden
      className={clsx(container, className)}
      style={assignInlineVars(heightVar, { height: `${String(size)}px` })}
    />
  );
};

export default Spacing;

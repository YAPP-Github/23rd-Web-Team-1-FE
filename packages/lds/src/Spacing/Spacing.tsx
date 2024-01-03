import { assignInlineVars } from '@vanilla-extract/dynamic';

import { container, heightVar } from './Spacing.css';

interface Props {
  size: number;
}

const Spacing = ({ size }: Props) => {
  return (
    <div
      className={container}
      style={assignInlineVars(heightVar, { height: `${String(size)}px` })}
    />
  );
};

export default Spacing;

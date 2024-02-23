import { HTMLAttributes } from 'react';

import { Icon } from '../Icon';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  name: string;
  size?: number;
  className?: string;
}

const IconButton = ({ name, size = 32, className, ...props }: Props) => {
  return (
    <button type="button" className={className} {...props}>
      <Icon name={name} size={size} />
    </button>
  );
};

export default IconButton;

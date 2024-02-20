import { HTMLAttributes } from 'react';

import { Icon } from '../Icon';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  name: string;
  className?: string;
}

const IconButton = ({ name, className, ...props }: Props) => {
  return (
    <button type="button" className={className} {...props}>
      <Icon name={name} />
    </button>
  );
};

export default IconButton;

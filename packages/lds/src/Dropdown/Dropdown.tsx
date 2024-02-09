import { HTMLAttributes } from 'react';
import { ReactNode } from 'react';

import FloatingItem from './DropdownItem';

interface BaseProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'type'> {
  children: ReactNode;
  className?: string;
}
const Dropdown = ({ children, className }: BaseProps) => {
  return <div className={className}>{children}</div>;
};

export default Object.assign(Dropdown, { Item: FloatingItem });

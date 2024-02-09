import { HTMLAttributes } from 'react';
import { ReactNode } from 'react';

import DropdownItem from './DropdownItem';

interface BaseProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}
const Dropdown = ({ children, className }: BaseProps) => {
  return <div className={className}>{children}</div>;
};

export default Object.assign(Dropdown, { Item: DropdownItem });

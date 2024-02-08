import { HTMLAttributes } from 'react';
import { ReactNode } from 'react';

import { container } from './Floating.css';
import FloatingItem from './FloatingItem';

interface BaseProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'type'> {
  children: ReactNode;
  className?: string;
}
const Floating = ({ children }: BaseProps) => {
  return <div className={container}>{children}</div>;
};

export default Object.assign(Floating, { Item: FloatingItem });

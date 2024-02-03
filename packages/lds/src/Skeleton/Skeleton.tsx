import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';

import { skeleton } from './Skeleton.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const Skeleton = ({ children, className, ...props }: Props) => {
  return (
    <div className={clsx(skeleton, className)} {...props}>
      {children}
    </div>
  );
};

export default Skeleton;

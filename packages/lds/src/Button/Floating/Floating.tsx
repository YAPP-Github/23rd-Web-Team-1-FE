import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { ReactNode } from 'react';

import { container, bottomSpacing } from './Floating.css';
import FloatingItem from './FloatingItem';

export type FloatingType = 'TIMELINE' | 'SCHEDULE';

interface BaseProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'type'> {
  children: ReactNode;
  className?: string;
  floatingType: FloatingType;
}
const Floating = ({ children, floatingType }: BaseProps) => {
  return (
    <div>
      {floatingType === 'SCHEDULE' ? (
        <div className={clsx(container, bottomSpacing.scheduleDetail)}>{children}</div>
      ) : (
        <div className={clsx(container, bottomSpacing.timeline)}>{children}</div>
      )}
    </div>
  );
};

export default Object.assign(Floating, { Item: FloatingItem });

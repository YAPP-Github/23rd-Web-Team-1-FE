import clsx from 'clsx';
import { forwardRef } from 'react';

import { listContainer, listContent } from './List.css';
import ListHeader from './ListHeader';
import ListRow from './ListRow';

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const List = forwardRef<HTMLDivElement, ListProps>(
  ({ children, className, ...props }: ListProps, ref) => {
    return (
      <section className={listContainer} {...props}>
        <div ref={ref} className={clsx(listContent, className)}>
          {children}
        </div>
      </section>
    );
  },
);

export default Object.assign(List, { Header: ListHeader, Row: ListRow });

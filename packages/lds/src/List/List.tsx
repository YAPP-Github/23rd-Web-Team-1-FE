import clsx from 'clsx';
import { forwardRef } from 'react';

import { listContainer, listContent } from './List.css';
import ListHeader from './ListHeader';
import ListRow from './ListRow';

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

const List = forwardRef<HTMLDivElement, ListProps>(({ children, className }: ListProps, ref) => {
  return (
    <section className={listContainer}>
      <div ref={ref} className={clsx(listContent, className)}>
        {children}
      </div>
    </section>
  );
});

export default Object.assign(List, { Header: ListHeader, Row: ListRow });

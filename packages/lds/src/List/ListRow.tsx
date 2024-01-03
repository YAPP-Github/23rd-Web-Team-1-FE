'use client';

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';

import { listRowContainer } from './ListRow.css';

interface Props {
  content: React.ReactNode;
  withArrow?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
}

const ListRow = ({ content, withArrow, disabled, onClick }: Props) => {
  return (
    <li className={listRowContainer} onClick={onClick}>
      <div>{content}</div>
      {withArrow && (
        <button type="button" disabled={disabled}>
          <Image src="https://static.im-linker.com/right-arrow.png" alt="" width={28} height={28} />
        </button>
      )}
    </li>
  );
};

export default ListRow;

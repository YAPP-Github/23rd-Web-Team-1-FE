'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';

import { Icon, Txt } from '@linker/lds';

import { header, backButton } from './BackHeader.css';

interface BackHeaderProps {
  title: string;
  className?: string;
}

function BackHeader({ title, className }: BackHeaderProps) {
  const router = useRouter();

  return (
    <header className={clsx(header, className)}>
      <button
        className={backButton}
        onClick={() => {
          router.back();
        }}
      >
        <Icon name="arrow-back" size={32} />
      </button>
      <Txt typography="p1" fontWeight="bold">
        {title}
      </Txt>
    </header>
  );
}

export default BackHeader;

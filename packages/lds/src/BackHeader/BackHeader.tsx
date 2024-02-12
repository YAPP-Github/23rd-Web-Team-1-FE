'use client';

import { useRouter } from 'next/navigation';

import { Icon, Txt } from '@linker/lds';

import { header, backButton } from './BackHeader.css';

interface BackHeaderProps {
  title: string;
}

function BackHeader({ title }: BackHeaderProps) {
  const router = useRouter();

  return (
    <header className={header}>
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

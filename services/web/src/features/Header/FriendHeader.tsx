'use client';

import { Tabs } from '@linker/lds';
import { clsx } from 'clsx';
import { useParams } from 'next/navigation';

import { minimizeStyle, header, headerContent } from './FriendHeader.css';
import { FriendProfile } from './components/FriendProfile';
import useMinimize from './hooks/useMinimize';

const MINIMIZE_THRESHOLD = 150;
const MAXIMIZE_THRESHOLD = 30;

function FriendHeaderContent() {
  const { id } = useParams();

  const TAB_ITEMS = [
    { href: `/friend/${id}/subject`, text: '관심주제', textSpan: null },
    { href: `/friend/${id}/timeline`, text: '타임라인', textSpan: null },
  ];

  const isMinimize = useMinimize({
    minimizeThreshold: MINIMIZE_THRESHOLD,
    maximizeThreshold: MAXIMIZE_THRESHOLD,
  });

  return (
    <header className={clsx(header, isMinimize && minimizeStyle)}>
      <div className={headerContent}>
        <FriendProfile isMinimize={isMinimize} />
        <Tabs tabInfos={TAB_ITEMS} />
      </div>
    </header>
  );
}

export default FriendHeaderContent;

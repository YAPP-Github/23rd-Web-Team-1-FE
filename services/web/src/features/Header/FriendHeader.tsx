'use client';

import { Tabs, TabInfo } from '@linker/lds';
import { clsx } from 'clsx';
import { useParams } from 'next/navigation';
import { useRef } from 'react';

import { minimizeStyle, header, headerContent } from './FriendHeader.css';
import { FriendProfile } from './components/FriendProfile';
import useMinimize from './hooks/useMinimize';

const MINIMIZE_THRESHOLD = 150;
const MAXIMIZE_THRESHOLD = 30;

function FriendHeaderContent() {
  const { id } = useParams();

  const tabInfos = useRef<TabInfo[]>([
    { href: `/friend/${id}/subject`, text: '관심주제', textSpan: null },
    { href: `/friend/${id}/timeline`, text: '타임라인', textSpan: null },
  ]);

  const isMinimize = useMinimize({
    minimizeThreshold: MINIMIZE_THRESHOLD,
    maximizeThreshold: MAXIMIZE_THRESHOLD,
  });

  return (
    <header className={clsx(header, isMinimize && minimizeStyle)}>
      <div className={headerContent}>
        <FriendProfile isMinimize={isMinimize} />
        <Tabs tabInfos={tabInfos} />
      </div>
    </header>
  );
}

export default FriendHeaderContent;

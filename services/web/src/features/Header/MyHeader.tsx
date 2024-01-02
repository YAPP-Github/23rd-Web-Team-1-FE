'use client';

import { Tabs, TabInfo } from '@linker/lds';
import { clsx } from 'clsx';
import { useRef } from 'react';

import { minimizeStyle, header, headerContent } from './MyHeader.css';
import { Logo } from './components/Logo'
import { MyProfile } from './components/MyProfile';
import useMinimize from './hooks/useMinimize';

const MINIMIZE_THRESHOLD = 150;
const MAXIMIZE_THRESHOLD = 30;

function MeHeaderContent() {
  const tabInfos = useRef<TabInfo[]>([
    { href: '/my/feed', text: '피드', textSpan: null },
    { href: '/my/contact', text: '연락처', textSpan: null },
    { href: '/my/timeline', text: '타임라인', textSpan: null },
  ]);

  const isMinimize = useMinimize({
    minimizeThreshold: MINIMIZE_THRESHOLD,
    maximizeThreshold: MAXIMIZE_THRESHOLD,
  });

  return (
    <header className={clsx(header, isMinimize && minimizeStyle)}>
      <div className={headerContent}>
        {!isMinimize && <Logo />}
        <MyProfile isMinimize={isMinimize} />
        <Tabs tabInfos={tabInfos} />
      </div>
    </header>
  );
}

export default MeHeaderContent;

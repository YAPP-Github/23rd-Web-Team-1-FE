'use client'

import { clsx } from 'clsx'
import { useRef } from 'react'

import { contentWrapper, fixedHeader } from './MeHeaderContent.css'
import { MeProfile } from './components/MeProfile'
import { Tabs, TabInfo } from './components/Tabs'
import useMinimize from './hooks/useMinimize'

const MINIMIZE_THRESHOLD = 150
const MAXIMIZE_THRESHOLD = 30

function MeHeaderContent() {
  const tabInfos = useRef<TabInfo[]>([
    { href: '/me/feed', text: '피드', textSpan: null },
    { href: '/me/contact', text: '연락처', textSpan: null },
    { href: '/me/timeline', text: '타임라인', textSpan: null },
  ])

  const minimize = useMinimize({ MINIMIZE_THRESHOLD, MAXIMIZE_THRESHOLD })

  return (
    <div className={clsx(contentWrapper, minimize && fixedHeader)}>
      <MeProfile minimize={minimize} />
      <Tabs tabInfos={tabInfos} />
    </div>
  )
}

export default MeHeaderContent

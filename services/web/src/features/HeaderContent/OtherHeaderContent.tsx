'use client'

import { clsx } from 'clsx'
import { useParams } from 'next/navigation'
import { useRef } from 'react'

import { contentWrapper, fixedHeader } from './OtherHeaderContent.css'
import { OtherProfile } from './components/OtherProfile'
import { Tabs, TabInfo } from './components/Tabs'
import useMinimize from './hooks/useMinimize'

const MINIMIZE_THRESHOLD = 150
const MAXIMIZE_THRESHOLD = 30

function OtherHeaderContent() {
  const { id } = useParams()

  const tabInfos = useRef<TabInfo[]>([
    { href: `/other/${id}/subject`, text: '관심주제', textSpan: null },
    { href: `/other/${id}/timeline`, text: '타임라인', textSpan: null },
  ])

  const isMinimize = useMinimize({
    minimizeThreshold: MINIMIZE_THRESHOLD,
    maximizeThreshold: MAXIMIZE_THRESHOLD,
  })

  return (
    <div className={clsx(contentWrapper, isMinimize && fixedHeader)}>
      <OtherProfile isMinimize={isMinimize} />
      <Tabs tabInfos={tabInfos} />
    </div>
  )
}

export default OtherHeaderContent

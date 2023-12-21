'use client'

import { clsx } from 'clsx'
import { useState, useEffect, useRef } from 'react'

import { contentWrapper, fixedHeader } from './MeHeaderContent.css'
import { MeProfile } from './components/MeProfile'
import { Tabs, TabInfo } from './components/Tabs'

const MINIMIZE_THRESHOLD = 150
const MAXIMIZE_THRESHOLD = 30

function MeHeaderContent() {
  const [minimize, setMinimize] = useState(false)
  const tabInfos = useRef<TabInfo[]>([
    { href: '/me/feed', text: '피드', textSpan: null },
    { href: '/me/contact', text: '연락처', textSpan: null },
    { href: '/me/timeline', text: '타임라인', textSpan: null },
  ])

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > (minimize ? MAXIMIZE_THRESHOLD : MINIMIZE_THRESHOLD)) {
        setMinimize(true)
      } else {
        setMinimize(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [minimize])

  return (
    <div className={clsx(contentWrapper, minimize && fixedHeader)}>
      <MeProfile minimize={minimize} />
      <Tabs tabInfos={tabInfos} />
    </div>
  )
}

export default MeHeaderContent

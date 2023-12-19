'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState, useRef } from 'react'

import {
  navigation,
  tapList,
  tapItem,
  link,
  activeLink,
  bottomLine,
  activeLine,
} from './Navigation.css'

interface TapInfo {
  href: string
  text: string
  textSpan: HTMLSpanElement | null
}

function Navigation() {
  const pathname = usePathname()
  const tapInfos = useRef<TapInfo[]>([
    { href: '/', text: '메인', textSpan: null },
    { href: '/contact', text: '연락처', textSpan: null },
    { href: '/timeline', text: '타임라인', textSpan: null },
  ])
  const [activeTabStyle, setActiveTabStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    const matchedRoute = tapInfos.current.find(tapInfo => tapInfo.href === pathname)

    if (matchedRoute) {
      const { textSpan } = matchedRoute

      if (textSpan) {
        const { width, left } = textSpan.getBoundingClientRect()

        setActiveTabStyle({
          width: `${width}px`,
          left: `${left}px`,
        })
      }
    }
  }, [pathname])

  return (
    <nav className={navigation}>
      <ul className={tapList}>
        {tapInfos.current.map(tapInfo => (
          <li className={tapItem} key={tapInfo.href}>
            <Link
              href={tapInfo.href}
              className={clsx({ [link]: true, [activeLink]: pathname === tapInfo.href })}
            >
              <span ref={ref => tapInfo.textSpan = ref}>{tapInfo.text}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className={bottomLine}>
        <div className={activeLine} style={activeTabStyle} />
      </div>
    </nav>
  )
}

export default Navigation

'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import {
  tabs,
  tapList,
  tapItem,
  link,
  activeLink,
  bottomLine,
  activeLine,
} from './Tabs.css'

export interface TabInfo {
  href: string
  text: string
  textSpan: HTMLSpanElement | null
}

interface TabsProps {
  tabInfos: React.MutableRefObject<TabInfo[]>
}

function Tabs({ tabInfos }: TabsProps) {
  const pathname = usePathname()
  const [activeTabStyle, setActiveTabStyle] = useState<React.CSSProperties>({})

  useEffect(() => {
    const matchedRoute = tabInfos.current.find(tabInfo => tabInfo.href === pathname)

    if (matchedRoute) {
      const { textSpan } = matchedRoute

      if (textSpan) {
        setActiveTabStyle({
          width: `${textSpan.offsetWidth}px`,
          left: `${textSpan.offsetLeft}px`,
        })
      }
    }
  }, [pathname, tabInfos])

  return (
    <nav className={tabs}>
      <ul className={tapList}>
        {tabInfos.current.map(tabInfo => (
          <li className={tapItem} key={tabInfo.href}>
            <Link
              href={tabInfo.href}
              className={clsx({ [link]: true, [activeLink]: pathname === tabInfo.href })}
            >
              <span ref={ref => tabInfo.textSpan = ref}>{tabInfo.text}</span>
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

export default Tabs

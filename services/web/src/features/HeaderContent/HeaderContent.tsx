'use client'

import { clsx } from 'clsx'
import { useState, useEffect } from 'react'

import { contentWrapper, fixedHeader } from './HeaderContent.css'
import { Navigation } from './components/Navigation'
import { Profile } from './components/Profile'

const MINIMIZE_THRESHOLD = 150
const MAXIMIZE_THRESHOLD = 30

function HeaderContent() {
  const [minimize, setMinimize] = useState(false)

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
      <Profile minimize={minimize} />
      <Navigation />
    </div>
  )
}

export default HeaderContent

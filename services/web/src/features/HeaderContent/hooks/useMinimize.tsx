import { useState, useEffect } from 'react'

interface UseMinimizeProps {
  minimizeThreshold: number
  maximizeThreshold: number
}

function useMinimize({ minimizeThreshold, maximizeThreshold }: UseMinimizeProps) {
  const [isMinimize, setMinimize] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > (isMinimize ? maximizeThreshold : minimizeThreshold)) {
        setMinimize(true)
      } else {
        setMinimize(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [minimizeThreshold, maximizeThreshold, isMinimize])

  return isMinimize
}

export default useMinimize

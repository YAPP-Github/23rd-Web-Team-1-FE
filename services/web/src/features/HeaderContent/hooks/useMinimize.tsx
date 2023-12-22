import { useState, useEffect } from 'react'

interface UseMinimizeProps {
  MINIMIZE_THRESHOLD: number
  MAXIMIZE_THRESHOLD: number
}

function useMinimize({ MINIMIZE_THRESHOLD, MAXIMIZE_THRESHOLD }: UseMinimizeProps) {
  const [isMinimize, setMinimize] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > (isMinimize ? MAXIMIZE_THRESHOLD : MINIMIZE_THRESHOLD)) {
        setMinimize(true)
      } else {
        setMinimize(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [MAXIMIZE_THRESHOLD, MINIMIZE_THRESHOLD, isMinimize])

  return isMinimize
}

export default useMinimize

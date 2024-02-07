import { useEffect, useState } from 'react';

const useIsScrolling = (y = 0) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (y < window.scrollY) {
        setIsScrolling(true);

        return;
      }

      setIsScrolling(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [y]);

  return isScrolling;
};

export default useIsScrolling;

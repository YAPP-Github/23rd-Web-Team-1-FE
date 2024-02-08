import { useEffect, useState } from 'react';

const useIsScrollOver = (y = 0) => {
  const [isScrollOver, setIsScrollOver] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (y < window.scrollY) {
        setIsScrollOver(true);

        return;
      }

      setIsScrollOver(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [y]);

  return isScrollOver;
};

export default useIsScrollOver;

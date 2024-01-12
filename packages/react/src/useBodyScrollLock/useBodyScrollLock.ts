import { useEffect } from 'react';

const useBodyScrollLock = (enable = true) => {
  useEffect(() => {
    if (enable === false) {
      return;
    }

    const originalStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [enable]);
};

export default useBodyScrollLock;

import { useEffect, useState } from 'react';

// https://nextjs.org/docs/messages/react-hydration-error
const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

export default useIsClient;

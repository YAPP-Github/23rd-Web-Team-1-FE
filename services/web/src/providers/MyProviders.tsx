'use client';

import { MyInfo } from '@/types/myInfo';
import { kyClient } from '@linker/ky';
import { createContext } from '@linker/react';
import { useQuery } from '@tanstack/react-query';

import { getTokens } from '@utils/token/client';

interface MyContext {
  myInfo?: MyInfo | null;
  isUser?: boolean;
}

const context: MyContext = {
  myInfo: null,
  isUser: false,
};

const [Provider, useContext] = createContext<MyContext>('MyInfo', context);

export const useMyContext = () => {
  return useContext('MyInfo');
};

interface Props extends MyContext {
  children: React.ReactNode;
}

const MyProviders = ({ children }: Props) => {
  const accessToken = getTokens()?.accessToken;

  const { data } = useQuery({
    queryKey: ['/v1/my'],
    queryFn: () => {
      const data = kyClient.get<MyInfo>('/v1/my');

      return data;
    },
    enabled: accessToken != null,
  });

  const isUser = data != null && accessToken != null;

  return (
    <Provider myInfo={data} isUser={isUser}>
      {children}
    </Provider>
  );
};

export default MyProviders;

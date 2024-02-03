'use client';

import { MyInfo } from '@/types/myInfo';
import { MyHeader } from '@features/Header';
import { createContext } from '@linker/react';

interface MyContext {
  myInfo: MyInfo | null;
  isUser: boolean;
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

const MyProviders = ({ children, myInfo, isUser }: Props) => {
  return (
    <Provider myInfo={myInfo} isUser={isUser}>
      <MyHeader />
      {children}
    </Provider>
  );
};

export default MyProviders;

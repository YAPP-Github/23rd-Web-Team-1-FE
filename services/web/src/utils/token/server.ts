import { cookies } from 'next/headers';

type Token = string | null;

export const getTokens = () => {
  const cookieStore = cookies();

  return {
    accessToken: cookieStore.get('accessToken')?.value,
    refreshToken: cookieStore.get('refreshToken')?.value,
  };
};

export const setTokens = (accessToken: Token, refreshToken: Token) => {
  const cookieStore = cookies();

  cookieStore.set('accessToken', accessToken ?? '');
  cookieStore.set('refreshToken', refreshToken ?? '');

  return;
};

export const deleteTokens = () => {
  const cookieStore = cookies();

  cookieStore.delete('accessToken');
  cookieStore.delete('refreshToken');

  return;
};

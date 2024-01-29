import Cookies from 'js-cookie';

type Token = string | null;

export const getTokens = async () => {
  if (typeof window === 'undefined') {
    const { cookies } = await import('next/headers');
    const cookieStore = cookies();

    return {
      accessToken: cookieStore.get('accessToken')?.value,
      refreshToken: cookieStore.get('refreshToken')?.value,
    };
  }

  return {
    accessToken: Cookies.get('accessToken'),
    refreshToken: Cookies.get('refreshToken'),
  };
};

export const setTokens = async (accessToken: Token, refreshToken: Token) => {
  if (typeof window === 'undefined') {
    const { cookies } = await import('next/headers');
    const cookieStore = cookies();

    cookieStore.set('accessToken', accessToken ?? '');
    cookieStore.set('refreshToken', refreshToken ?? '');

    return;
  }

  Cookies.set('accessToken', accessToken ?? '');
  Cookies.set('refreshToken', refreshToken ?? '');
};

export const deleteTokens = async () => {
  if (typeof window === 'undefined') {
    const { cookies } = await import('next/headers');
    const cookieStore = cookies();

    cookieStore.delete('accessToken');
    cookieStore.delete('refreshToken');

    return;
  }

  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
};

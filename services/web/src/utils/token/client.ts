import Cookies from 'js-cookie';

type Token = string | null;

export const getTokens = () => {
  if (typeof window === 'undefined') {
    return;
  }

  return {
    accessToken: Cookies.get('accessToken'),
    refreshToken: Cookies.get('refreshToken'),
  };
};

export const setTokens = (accessToken: Token, refreshToken: Token) => {
  if (typeof window === 'undefined') {
    return;
  }

  Cookies.set('accessToken', accessToken ?? '');
  Cookies.set('refreshToken', refreshToken ?? '');
};

export const deleteTokens = () => {
  if (typeof window === 'undefined') {
    return;
  }

  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
};

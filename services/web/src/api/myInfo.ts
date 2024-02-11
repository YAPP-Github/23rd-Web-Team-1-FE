import { MyInfo } from '@/types/myInfo';
import { ky } from '@linker/ky';

import { getTokens } from '@utils/token/server';

export const getMyInfo = () => {
  if (getTokens().accessToken == null) {
    return null;
  }

  const data = ky.get<MyInfo>('/v1/my');

  return data;
};

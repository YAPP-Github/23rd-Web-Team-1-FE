import { getMyInfo } from '@api/myInfo';

import QRCard from './QRCard';

const SharePage = async () => {
  const myInfo = await getMyInfo();

  if (myInfo == null) {
    return null;
  }

  return <QRCard myInfo={myInfo} />;
};

export default SharePage;

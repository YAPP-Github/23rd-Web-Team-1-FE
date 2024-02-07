import { getMyInfoWithServer } from '@api/myInfo';
import { Header, HeaderFixed, Tabs } from '@linker/lds';

import { myHeaderContainer } from './MyHeader.css';
import MyProfile from './MyProfile';
import MyProfileCard from './MyProfileCard';

const TAB_ITEMS = [
  { href: '/my/feed', text: '피드' },
  { href: '/my/contact', text: '연락처' },
  { href: '/my/timeline', text: '타임라인' },
];

async function MyHeader() {
  const myInfo = await getMyInfoWithServer();

  return (
    <div className={myHeaderContainer}>
      <Header />
      <MyProfile myInfo={myInfo} />
      <Tabs tabInfos={TAB_ITEMS} />

      <HeaderFixed leftAddon={<MyProfileCard myInfo={myInfo} />}>
        <Tabs tabInfos={TAB_ITEMS} />
      </HeaderFixed>
    </div>
  );
}

export default MyHeader;

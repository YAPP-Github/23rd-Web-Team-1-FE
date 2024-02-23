import { getMyInfo } from '@api/myInfo';
import { Header, HeaderFixed, Icon, Tabs } from '@linker/lds';

import { myHeaderContainer } from './MyHeader.css';
import MyProfile from './MyProfile';
import MyProfileCard from './MyProfileCard';

const TAB_ITEMS = [
  { href: '/my/feed', text: '홈 피드' },
  { href: '/my/contact', text: '연락처' },
  { href: '/my/timeline', text: '타임라인' },
];

async function MyHeader() {
  const myInfo = await getMyInfo();

  return (
    <div className={myHeaderContainer}>
      <Header
        rightAddon={
          <>
            <Icon name="share-white" />
            <Icon name="list-white" />
          </>
        }
      />
      <MyProfile myInfo={myInfo} />
      <Tabs tabInfos={TAB_ITEMS} />

      <HeaderFixed
        leftAddon={<MyProfileCard myInfo={myInfo} />}
        rightAddon={
          <>
            <Icon name="share-white" />
            <Icon name="list-white" />
          </>
        }
      >
        <Tabs tabInfos={TAB_ITEMS} />
      </HeaderFixed>
    </div>
  );
}

export default MyHeader;

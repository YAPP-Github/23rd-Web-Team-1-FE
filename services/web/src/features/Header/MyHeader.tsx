import { getMyInfoWithServer } from '@api/myInfo';
import { Tabs } from '@linker/lds';

import { header, headerContent } from './MyHeader.css';
import { Logo } from './components/Logo';
import { MyProfile } from './components/MyProfile';

const TAB_ITEMS = [
  { href: '/my/feed', text: '피드' },
  { href: '/my/contact', text: '연락처' },
  { href: '/my/timeline', text: '타임라인' },
];

async function MyHeaderContent() {
  const myInfo = await getMyInfoWithServer();

  return (
    <header className={header}>
      <div className={headerContent}>
        <Logo />
        <MyProfile isMinimize={true} myInfo={myInfo} />
        <Tabs tabInfos={TAB_ITEMS} />
      </div>
    </header>
  );
}

export default MyHeaderContent;

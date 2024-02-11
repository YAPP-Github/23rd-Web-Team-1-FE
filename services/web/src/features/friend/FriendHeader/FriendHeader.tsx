import { getContectInfo } from '@api/contacts';
import { Header, HeaderFixed, Icon, Tabs } from '@linker/lds';
import { colors } from '@linker/styles';
import Link from 'next/link';

import { headerContainer } from './FriendHeader.css';
import FriendProfile from './FriendProfile';

const FriendHeader = async ({ id }: { id: string }) => {
  const TAB_ITEMS = [
    { href: `/friend/${id}/profile`, text: '프로필' },
    { href: `/friend/${id}/subject`, text: '관심주제' },
    { href: `/friend/${id}/timeline`, text: '타임라인' },
  ];

  const contactInfo = await getContectInfo(id);

  return (
    <div className={headerContainer}>
      <Header
        leftAddon={
          <Link href="/my/feed">
            <Icon name="back-white" />
          </Link>
        }
        rightAddon={
          <>
            <Icon name="bookmark" />
            <Icon name="more-white" />
          </>
        }
      />
      <FriendProfile contactInfo={contactInfo} />
      <Tabs tabInfos={TAB_ITEMS} />

      <HeaderFixed
        leftAddon={
          <Link href="/my/feed">
            <Icon name="back-white" />
          </Link>
        }
        rightAddon={
          <>
            <Icon name="bookmark" />
            <Icon name="more-white" />
          </>
        }
        bgColor={colors.gradationMagenta}
        scrollOver={90}
      >
        <Tabs tabInfos={TAB_ITEMS} />
      </HeaderFixed>
    </div>
  );
};

export default FriendHeader;

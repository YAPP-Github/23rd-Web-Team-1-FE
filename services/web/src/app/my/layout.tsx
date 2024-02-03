import { MyInfo } from '@/types/myInfo';
import { ky } from '@linker/ky';
import { Button, Layout, Icon } from '@linker/lds';

import { getTokens } from '@utils/token/server';

import MyProviders from './providers';

const getMyInfo = () => {
  if (getTokens()?.accessToken == null) {
    return null;
  }

  const data = ky.get<MyInfo>('/v1/my');

  return data;
};

async function MyLayout({ children }: { children: React.ReactNode }) {
  const myInfo = await getMyInfo();
  const isUser = myInfo != null && getTokens()?.accessToken != null;

  return (
    <MyProviders myInfo={myInfo} isUser={isUser}>
      <Layout>
        {children}

        <Button.FAB text="일정을 등록해보세요" type="extand">
          <Icon name="plus-white" size={42} />
        </Button.FAB>
      </Layout>
    </MyProviders>
  );
}

export default MyLayout;

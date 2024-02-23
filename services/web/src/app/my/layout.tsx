import { FloatingButton, MyHeader } from '@features/my';
import { Layout } from '@linker/lds';

import { getTokens } from '@utils/token/server';

function MyLayout({ children }: { children: React.ReactNode }) {
  const { accessToken } = getTokens();

  return (
    <>
      <MyHeader />
      <Layout>
        {children}
        {accessToken != null && <FloatingButton />}
      </Layout>
    </>
  );
}

export default MyLayout;

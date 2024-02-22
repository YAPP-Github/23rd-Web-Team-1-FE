import { FloatingButton, MyHeader } from '@features/my';
import { Layout } from '@linker/lds';

import { getTokens } from '@utils/token/server';

function MyLayout({ children }: { children: React.ReactNode }) {
  const hasToken = getTokens().accessToken;

  return (
    <>
      <MyHeader />
      <Layout>
        {children}

        {hasToken && <FloatingButton />}
      </Layout>
    </>
  );
}

export default MyLayout;

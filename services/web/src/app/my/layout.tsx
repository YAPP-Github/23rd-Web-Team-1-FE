'use client';

import { MyHeader } from '@features/Header';
import { Button, Layout } from '@linker/lds';

function MyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MyHeader />
      <Layout>
        {children}

        <Button.FAB
          iconUrl="https://static.im-linker.com/plus-white.svg"
          text="일정을 등록해보세요"
          type="extand"
        />
      </Layout>
    </>
  );
}

export default MyLayout;

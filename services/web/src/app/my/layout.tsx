import { MyHeader } from '@features/Header';
import { Layout } from '@linker/lds';

function MyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MyHeader />
      <Layout>{children}</Layout>
    </>
  );
}

export default MyLayout;

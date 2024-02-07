import { Layout } from '@linker/lds';

function FriendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}

export default FriendLayout;

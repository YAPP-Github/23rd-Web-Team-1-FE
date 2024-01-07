import { FriendHeader } from '@features/Header';
import { Layout } from '@linker/lds';

function FriendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FriendHeader />
      <Layout>{children}</Layout>
    </>
  );
}

export default FriendLayout;

import { FriendHeader } from '@features/friend';
import { Layout } from '@linker/lds';

function FriendLayout({ params, children }: { params: { id: string }; children: React.ReactNode }) {
  const id = params.id;

  return (
    <>
      <FriendHeader id={id} />
      <Layout>{children}</Layout>
    </>
  );
}

export default FriendLayout;

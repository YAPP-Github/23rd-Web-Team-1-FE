import { FriendHeader } from '@features/Header';

function FriendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FriendHeader />
      {children}
    </>
  )
}

export default FriendLayout

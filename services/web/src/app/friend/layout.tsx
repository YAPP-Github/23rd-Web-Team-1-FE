import { FriendHeaderContent } from '@features/Header';

function FriendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FriendHeaderContent />
      {children}
    </>
  )
}

export default FriendLayout

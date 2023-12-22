import { FriendHeaderContent } from '@/features/HeaderContent';

function FriendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FriendHeaderContent />
      {children}
    </>
  )
}

export default FriendLayout

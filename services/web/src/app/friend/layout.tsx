import { FriendHeader } from '@features/Header';

import { section } from './layout.css'

function FriendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FriendHeader />
      <section className={section}>
        {children}
      </section>
    </>
  )
}

export default FriendLayout

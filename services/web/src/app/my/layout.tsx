import { MyHeader } from '@features/Header';

import { section } from './layout.css'

function MyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MyHeader />
      <section className={section}>
        {children}
      </section>
    </>
  );
}

export default MyLayout;

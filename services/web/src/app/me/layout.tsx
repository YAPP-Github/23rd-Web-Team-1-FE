import { MyHeader } from '@features/Header';

import { section } from './layout.css'

function MeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MyHeader />
      <section className={section}>
        {children}
      </section>
    </>
  );
}

export default MeLayout;

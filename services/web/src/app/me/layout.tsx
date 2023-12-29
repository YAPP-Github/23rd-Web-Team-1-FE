import { MyHeader } from '@features/Header';

function MeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MyHeader />
      {children}
    </>
  );
}

export default MeLayout;

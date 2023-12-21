import { MeHeaderContent } from '@/features/HeaderContent';
import { Logo } from '@/features/Logo'

function MeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Logo />
      </header>
      <MeHeaderContent />
      {children}
    </>
  )
}

export default MeLayout

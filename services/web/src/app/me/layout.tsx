import { HeaderContent } from '@/features/HeaderContent';
import { Logo } from '@/features/Logo'

function MeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Logo />
      </header>
      <HeaderContent />
      {children}
    </>
  )
}

export default MeLayout

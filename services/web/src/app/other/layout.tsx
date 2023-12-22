import { OtherHeaderContent } from '@/features/HeaderContent';

function OtherLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OtherHeaderContent />
      {children}
    </>
  )
}

export default OtherLayout

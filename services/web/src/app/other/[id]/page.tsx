import { redirect } from 'next/navigation'

function OtherPage({ params }: { params: { id: string } }) {
  const id = params.id;

  return redirect(`/other/${id}/subject`)
}

export default OtherPage

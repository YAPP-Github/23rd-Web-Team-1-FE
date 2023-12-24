import { redirect } from 'next/navigation'

function MePage() {
  return redirect('/me/feed')
}

export default MePage

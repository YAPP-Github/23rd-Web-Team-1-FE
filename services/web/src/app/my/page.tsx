import { redirect } from 'next/navigation';

function MyPage() {
  return redirect('/my/feed');
}

export default MyPage;

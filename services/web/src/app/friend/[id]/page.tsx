import { redirect } from 'next/navigation';

function FriendPage({ params }: { params: { id: string } }) {
  const id = params.id;

  return redirect(`/friend/${id}/profile`);
}

export default FriendPage;

import { FriendProfile } from '@app/friend/profile/components/FriendProfile';
import { ky } from '@linker/ky';

import { ContactInfo } from '../../../../types/contact';

async function ProfilePage({ params }: { params: { id: string } }) {
  const profileData = await getContactById(params.id);

  return (
    <FriendProfile
      id={profileData.id}
      name={profileData.name}
      job={profileData.job}
      association={profileData.association}
      profileImgUrl={profileData.profileImgUrl}
      phoneNumber={profileData.phoneNumber}
      tags={profileData.tags}
      email={profileData.email}
    />
  );
}

export default ProfilePage;

const getContactById = (id: string) => {
  const response = ky.get<ContactInfo>(`/v1/contacts/${id}`);

  return response;
};

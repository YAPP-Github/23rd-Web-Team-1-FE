import { MyInfo } from '@/types/myInfo';
import { Profile, Txt } from '@linker/lds';
import { colors } from '@linker/styles';

import { profileImage } from './MyProfile.css';
import { container, profileName } from './MyProfileCard.css';

interface Props {
  myInfo: MyInfo | null;
}

const MyProfileCard = ({ myInfo }: Props) => {
  if (myInfo === null) {
    return;
  }

  return (
    <div className={container}>
      <Profile imageUrl={myInfo.profileImgUrl} className={profileImage} size="small" />

      <Txt
        as="p"
        typography="h6"
        fontWeight="extrabold"
        color={colors.white}
        className={profileName}
      >
        {myInfo.name}
      </Txt>
    </div>
  );
};

export default MyProfileCard;

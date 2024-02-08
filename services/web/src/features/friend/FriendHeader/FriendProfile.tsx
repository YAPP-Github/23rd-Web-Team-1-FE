import { ContactInfo } from '@/types/contact';
import { Icon, Profile, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import clsx from 'clsx';

import { container, iconWrapper, jobWrapper, profileImage, textWrapper } from './FriendProfile.css';

const FriendProfile = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  return (
    <div className={container}>
      <Profile
        imageUrl={contactInfo.profileImgUrl}
        className={profileImage}
        size="xLarge"
        priority
      />

      <Txt as="p" typography="h5" color={colors.white} fontWeight="extrabold">
        {contactInfo.name}
      </Txt>
      <Txt as="p" typography="p3" color={colors.white} className={clsx(textWrapper, jobWrapper)}>
        <Icon name="career" size={22} className={iconWrapper} /> {contactInfo.job}
      </Txt>
      <Txt as="p" typography="p3" color={colors.white} className={textWrapper}>
        <Icon name="time-white" size={20} className={iconWrapper} /> 28일 전 만남
      </Txt>
    </div>
  );
};

export default FriendProfile;

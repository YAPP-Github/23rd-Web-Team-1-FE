'use client';
import { Txt } from '@linker/lds';
import { Icon } from '@linker/lds';
import { colors } from '@linker/styles';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import {
  invitaionProfileWrppaer,
  invitationWrapper,
  invitaionProfileImgWrppaer,
  invitationContainer,
  invitaionDivider,
} from './InvitationItem.css';

interface InvitationItemProps {
  id: number;
  profileImg: string;
  name: string;
}

export const InvitionItem = ({ id, profileImg, name }: InvitationItemProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push('/');
  };

  return (
    <div className={invitationContainer}>
      <div className={invitationWrapper}>
        <div className={invitaionProfileWrppaer}>
          <div className={invitaionProfileImgWrppaer}>
            <Image src={profileImg} width={28} height={28} alt={'profileImg'} />
          </div>
          <Txt typography="p2" color={colors.black} fontWeight="medium">
            {name}
          </Txt>
        </div>
        <button type="button" onClick={onClick}>
          <Icon name="next" size={20} />
        </button>
      </div>
      <div className={invitaionDivider}></div>
    </div>
  );
};

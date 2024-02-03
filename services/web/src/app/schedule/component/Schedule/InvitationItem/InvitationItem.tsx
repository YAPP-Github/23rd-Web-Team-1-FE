import { Txt } from '@linker/lds';
import { Icon } from '@linker/lds';
import { colors } from '@linker/styles';
import Image from 'next/image';

import {
  invitaionProfileWrppaer,
  invitationWrapper,
  invitaionProfileImgWrppaer,
  invitationContainer,
  invitaionDivider,
} from './InvitationItem.css';

export const InviationItem = () => {
  return (
    <div className={invitationContainer}>
      <div className={invitationWrapper}>
        <div className={invitaionProfileWrppaer}>
          <div className={invitaionProfileImgWrppaer}>
            <Image
              src={'https://static.im-linker.com/images/profile-sample.png'}
              width={28}
              height={28}
              alt={'profileImg'}
            />
          </div>
          <Txt typography="p2" color={colors.black} fontWeight="medium">
            이지우
          </Txt>
        </div>
        <button type="button">
          <Icon name="next" size={20} />
        </button>
      </div>
      <div className={invitaionDivider}></div>
    </div>
  );
};

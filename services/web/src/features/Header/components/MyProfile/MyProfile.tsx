'use client';

import { MyInfo } from '@/types/myInfo';
import { Button, Icon, Modal, Profile, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

import {
  profileImage,
  profileContainer,
  profileName,
  profileContent,
  loginModal,
  profileWrapper,
  profileInfo,
} from './MyProfile.css';

interface ProfileProps {
  isMinimize: boolean;
  myInfo: MyInfo | null;
}

function MyProfile({ isMinimize, myInfo }: ProfileProps) {
  const router = useRouter();

  const handleLoginClick = () => {
    if (process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL == null) {
      return;
    }

    router.replace(`${process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL}`);
  };

  return (
    <section className={clsx(profileWrapper, isMinimize && 'minimize')}>
      {myInfo == null ? (
        <Modal>
          <Modal.Trigger>
            <div className={profileContainer}>
              <Profile className={profileImage} size="xLarge" />

              <div className={profileContent}>
                <div className={profileName}>
                  <Txt typography="h5" color={colors.white}>
                    로그인하기
                  </Txt>
                  <Icon name="arrow-fill-white" size={20} />
                </div>

                <Txt typography="p4" fontWeight="regular" color={colors.white}>
                  회원가입을 통해 인맥관리를 해보세요
                </Txt>
              </div>
            </div>
          </Modal.Trigger>

          <Modal.Content className={loginModal}>
            <div>로그인 모달</div>

            <Modal.Bottom>
              <Button.KakaoLogin onClick={handleLoginClick} />
            </Modal.Bottom>
          </Modal.Content>
        </Modal>
      ) : (
        <div className={profileContainer}>
          <Profile imageUrl={myInfo.profileImgUrl} className={profileImage} size="xLarge" />
          <div className={profileContent}>
            <div className={profileName}>
              <Txt typography="h5" fontWeight="extrabold" color={colors.white}>
                {myInfo.name}
              </Txt>
              <Icon name="arrow-fill-white" size={20} />
            </div>

            <div className={profileInfo}>
              <Txt typography="p4" color={colors.white} fontWeight="regular">
                연락처 <strong>{myInfo.contactsNum}</strong>
              </Txt>
              <Txt typography="p4" color={colors.white} fontWeight="regular">
                예정일정 <strong>{myInfo.scheduleNum}</strong>
              </Txt>
              <Txt typography="p4" color={colors.white} fontWeight="regular">
                작성노트 <strong>{myInfo.interests.length}</strong>
              </Txt>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MyProfile;

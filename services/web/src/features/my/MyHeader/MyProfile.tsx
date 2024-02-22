'use client';

import { MyInfo } from '@/types/myInfo';
import { Button, Icon, Logo, Modal, Profile, Spacing, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { useRouter } from 'next/navigation';

import {
  profileImage,
  profileContainer,
  profileName,
  profileContent,
  loginModal,
  profileWrapper,
  profileInfo,
  loginModalDescription,
} from './MyProfile.css';

interface ProfileProps {
  myInfo: MyInfo | null;
}

function MyProfile({ myInfo }: ProfileProps) {
  const router = useRouter();

  const handleLoginClick = () => {
    if (process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL == null) {
      return;
    }

    router.replace(`${process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL}`);
  };

  return (
    <div className={profileWrapper}>
      {myInfo == null ? (
        <Modal>
          <Modal.Trigger>
            <div className={profileContainer}>
              <Profile className={profileImage} size="xLarge" priority />

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
            <Logo type="fill" width={120} height={40} />
            <Spacing size={4} />
            <Txt typography="p2" fontWeight="medium" color={colors.gray800}>
              {'관심사를 기반으로\n대화 주제를 추천받아 보세요'}
            </Txt>

            <Modal.Bottom>
              <Txt
                as="p"
                typography="p3"
                fontWeight="regular"
                color={colors.gray500}
                className={loginModalDescription}
              >
                카카오 계정으로 간편 가입하기
              </Txt>
              <Button.KakaoLogin onClick={handleLoginClick} />
            </Modal.Bottom>
          </Modal.Content>
        </Modal>
      ) : (
        <div className={profileContainer}>
          <Profile
            imageUrl={myInfo.profileImgUrl}
            className={profileImage}
            size="xLarge"
            priority
          />
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
    </div>
  );
}

export default MyProfile;

'use client';

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
} from './MyProfile.css';

interface ProfileProps {
  isMinimize: boolean;
}

function MyProfile({ isMinimize }: ProfileProps) {
  const router = useRouter();

  const handleLoginClick = () => {
    if (process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL == null) {
      return;
    }

    router.replace(`${process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL}`);
  };

  return (
    <section className={clsx(profileWrapper, isMinimize && 'minimize')}>
      <Modal>
        <Modal.Trigger>
          <div className={profileContainer}>
            <Profile className={profileImage} />

            <div className={profileContent}>
              <div className={profileName}>
                <Txt typography="h5" color={colors.white}>
                  로그인하기
                </Txt>
                <Icon name="arrow-fill-white" />
              </div>

              <Txt as="p" typography="p4" color={colors.white}>
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
    </section>
  );
}

export default MyProfile;

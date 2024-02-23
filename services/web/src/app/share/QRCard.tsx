'use client';

import { MyInfo } from '@/types/myInfo';
import { Icon, Logo, Spacing, Txt } from '@linker/lds';
import { useBodyScrollLock } from '@linker/react';
import { colors } from '@linker/styles';
import Image from 'next/image';
import QR from 'qrcode.react';

import {
  career,
  container,
  infoWrapper,
  layout,
  logoWrapper,
  myInfoWrapper,
  qrWrapper,
} from './QRCard.css';

const QRCard = ({ myInfo }: { myInfo: MyInfo }) => {
  useBodyScrollLock();

  return (
    <section className={layout}>
      <Spacing size={20} />
      <div className={container}>
        <div className={logoWrapper}>
          <Logo />
        </div>

        <Spacing size={14} />
        <Image src={myInfo.profileImgUrl} alt="프로필 이미지" width={142} height={142} />

        <div className={infoWrapper}>
          <div className={myInfoWrapper}>
            <Txt as="p" typography="h5" fontWeight="bold" color={colors.white}>
              {myInfo.name}
            </Txt>
            <div className={career}>
              <Icon name="career" size={20} />
              <Txt as="p" typography="p3" fontWeight="bold" color={colors.white}>
                {myInfo.email}
              </Txt>
            </div>
          </div>

          <div className={qrWrapper}>
            <QR
              id="qr-gen"
              value={`https://im-linker.com/friend/${myInfo.contactsNum}`}
              size={96}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCard;

'use client';

import { Icon, List, Txt } from '@linker/lds';
import { colors } from '@linker/styles';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { bannerContainer, contentWrapper, imageWrapper, text } from './ContactBanner.css';

function ContactBanner({ hasToken }: { hasToken: boolean }) {
  const router = useRouter();

  const handleLoginClick = () => {
    if (process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL == null) {
      return;
    }

    router.replace(`${process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL}`);
  };

  if (hasToken) {
    return;
  }

  return (
    <motion.div
      initial={{
        display: 'none',
        height: 'calc(100% - 0.5rem)',
      }}
      animate={{
        display: 'block',
        height: '100%',
      }}
      transition={{ duration: 0.2 }}
    >
      <List className={bannerContainer} onClick={handleLoginClick}>
        <div className={contentWrapper}>
          <Image
            src="https://static.im-linker.com/images/contact-banner.png"
            alt=""
            width={48}
            height={48}
            className={imageWrapper}
          />
          <div>
            <Txt as="p" typography="p3" fontWeight="medium" color={colors.white} className={text}>
              내 지인을 한 번에 관리하고 싶다면?
            </Txt>
            <Txt
              as="p"
              typography="h7"
              fontWeight="extrabold"
              color={colors.white}
              className={text}
            >
              나만의 연락처 등록하기
            </Txt>
          </div>
        </div>
        <Icon name="next-white" size={32} />
      </List>
    </motion.div>
  );
}

export default ContactBanner;

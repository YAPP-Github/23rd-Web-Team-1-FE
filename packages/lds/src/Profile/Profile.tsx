'use client';

import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

import { profile } from './Profile.css';

interface Props extends Omit<ImageProps, 'src' | 'alt'> {
  profileImgUrl?: string;
  alt?: string;
  className?: string;
}

const PROFILE_DEFAULT_IMAGE_URL = 'https://static.im-linker.com/images/profile-default.png';

const Profile = ({ profileImgUrl, alt = '', className, ...props }: Props) => {
  return (
    <Image
      src={profileImgUrl ?? PROFILE_DEFAULT_IMAGE_URL}
      blurDataURL={profileImgUrl ?? PROFILE_DEFAULT_IMAGE_URL}
      alt={alt === '' ? '기본 프로필 이미지' : alt}
      width={64}
      height={64}
      placeholder="blur"
      className={clsx(profile, className)}
      {...props}
    />
  );
};

export default Profile;

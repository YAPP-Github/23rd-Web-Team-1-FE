'use client';

import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';

import { profile } from './Profile.css';

const PROFILE_SIZE = {
  xxLarge: 90,
  xLarge: 64,
  large: 56,
  medium: 48,
  small: 36,
};

type ProfileSize = keyof typeof PROFILE_SIZE;

interface Props extends Omit<ImageProps, 'src' | 'alt'> {
  imageUrl?: string | null;
  alt?: string;
  className?: string;
  size?: ProfileSize;
}

const PROFILE_DEFAULT_IMAGE_URL = 'https://static.im-linker.com/images/profile-default.png';

const Profile = ({ imageUrl, alt = '', className, size = 'large', ...props }: Props) => {
  return (
    <Image
      src={imageUrl ?? PROFILE_DEFAULT_IMAGE_URL}
      blurDataURL={imageUrl ?? PROFILE_DEFAULT_IMAGE_URL}
      alt={alt === '' ? '기본 프로필 이미지' : alt}
      width={PROFILE_SIZE[size]}
      height={PROFILE_SIZE[size]}
      className={clsx(profile({ size }), className)}
      {...props}
    />
  );
};

export default Profile;

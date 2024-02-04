import { colors } from '@linker/styles';
import { globalStyle, style } from '@vanilla-extract/css';

export const profileWrapper = style({
  display: 'flex',
  alignItems: 'center',
  padding: '0 2rem',
});

export const profileContainer = style({
  display: 'flex',
  padding: '1.6rem 2rem 2.4rem ',
});

export const profileImage = style({
  marginRight: '1.6rem',
});

export const profileContent = style({
  display: 'flex',
  flexDirection: 'column',
});

export const profileName = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  marginBottom: '0.6rem',
});

export const profileInfo = style({
  display: 'flex',
  gap: '1.2rem',
  color: colors.white,
});

export const loginModal = style({
  height: '46rem',
});

export const profileContainerSkeleton = style([
  profileContainer,
  {
    padding: '1.6rem 2rem 2.4rem ',
  },
]);

export const profileContentSkeleton = style([
  profileContent,
  {
    padding: '0.5rem 0',
  },
]);

export const profileImageSkeleton = style([
  profileImage,
  {
    width: '6.4rem',
    height: '6.4rem',
    marginRight: '1.6rem',
    borderRadius: '2.4rem !important',
  },
]);

export const profileNameSkeleton = style([
  profileName,
  {
    width: '13rem',
    height: '2.2rem',
    marginBottom: '0.6rem',
  },
]);

export const profileInfoSkeleton = style([
  profileInfo,
  {
    width: '18.5rem',
    height: '1.8rem',
  },
]);

globalStyle(`.minimize`, {
  padding: '1.2rem 2rem',
});

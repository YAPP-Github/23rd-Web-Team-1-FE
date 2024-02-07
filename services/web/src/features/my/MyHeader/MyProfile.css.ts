import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const profileWrapper = style({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '72rem',
  margin: '0 auto',
});

export const profileContainer = style({
  display: 'flex',
  padding: '1.6rem 2rem 2.4rem',
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

import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '72rem',
  margin: '0 auto',
  padding: '0.8rem 0 2.4rem',
});

export const profileImage = style({
  marginBottom: '1.2rem',
});

export const textWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const jobWrapper = style({
  margin: '0.6rem 0 0.4rem',
});

export const iconWrapper = style({
  marginRight: '0.4rem',
});

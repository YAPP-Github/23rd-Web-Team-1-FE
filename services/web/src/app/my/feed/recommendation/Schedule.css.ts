import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  gap: '1.4rem',
});

export const profileImage = style({
  borderRadius: '40%',
});

export const scheduleDateWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
});

export const scheduleDateInfo = style({
  display: 'block',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

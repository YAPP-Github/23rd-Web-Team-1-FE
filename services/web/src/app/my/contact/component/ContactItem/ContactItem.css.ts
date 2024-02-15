import { style } from '@vanilla-extract/css';

export const contactItemWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '1.2rem',
  paddingBottom: '1.6rem',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
});

export const imageWrapper = style({
  borderRadius: '20px',
  overflow: 'hidden',
});

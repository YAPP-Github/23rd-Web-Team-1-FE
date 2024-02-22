import { style } from '@vanilla-extract/css';

export const friendProfileWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '2.4rem',
  gap: '1.2rem',
});

export const interestWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});
export const interestItemWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.8rem',
  alignItems: 'center',
});

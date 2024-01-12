import { style } from '@vanilla-extract/css';

export const scheduleWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const profileImage = style({
  width: '4.8rem',
  height: '4.8rem',
  borderRadius: '40%',
});

export const scheduleInfo = style({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '1.2rem',
});

export const dateWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const date = style({
  marginLeft: '0.5rem',
});

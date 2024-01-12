import { style } from '@vanilla-extract/css';

export const scheduleWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const profileImageWrapper = style({
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4.8rem',
  height: '4.8rem',
  borderRadius: '40%',
  backgroundColor: '#f1f3f5',
});

export const profileImageStyle = style({
  width: '100%',
  height: '100%',
});

export const calendarImageStyle = style({
  width: '2rem',
  height: '2rem',
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

import { style } from '@vanilla-extract/css';

export const wrapper = style({
  padding: '1.6rem 0',
});

export const header = style({
  padding: '0 2rem',
  marginBottom: '2.2rem',
});

export const scheduleList = style({
  display: 'flex',
  gap: '1.2rem',
  width: 'auto',
  overflowY: 'auto',
  padding: '0 2rem',
});

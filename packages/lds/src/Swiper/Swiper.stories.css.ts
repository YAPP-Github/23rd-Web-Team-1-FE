import { style } from '@vanilla-extract/css';

export const wrapper = style({
  width: '300px',
  height: '300px',
});

export const item = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

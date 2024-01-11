import { style } from '@vanilla-extract/css';

export const wrapper = style({
  width: '300px',
});

export const box = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '300px',
  backgroundColor: 'rgb(230, 230, 230)',
});

import { style } from '@vanilla-extract/css';

export const wrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  paddingLeft: '24px',
  paddingRight: '24px',
});

export const totalCountWrapper = style({
  paddingTop: '38px',
  display: 'flex',
  flexDirection: 'row',
});

export const profileWrapper = style({
  display: 'flex',
  flexDirection: 'row',
});

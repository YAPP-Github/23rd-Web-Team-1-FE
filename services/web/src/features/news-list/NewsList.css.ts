import { style } from '@vanilla-extract/css';

export const wrapper = style({
  marginTop: '3rem',
});

export const chipWrapper = style({
  display: 'flex',
  gap: '0.8rem',
  overflowY: 'auto',
});

export const chip = style({
  minWidth: 'fit-content',
});

export const newsListWrapper = style({
  marginTop: '0.8rem',
});

import { style } from '@vanilla-extract/css';

export const chipWrapper = style({
  display: 'flex',
  gap: '0.8rem',
  overflowY: 'auto',
});

export const chip = style({
  minWidth: 'fit-content',
});

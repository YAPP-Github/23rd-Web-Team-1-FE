import { style } from '@vanilla-extract/css';

export const screenWrapper = style({
  width: `100%`,
  height: `100%`,
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  backgroundColor: 'rgb(230, 230, 230)',
});

export const itemWrapper = style({
  display: 'flex',
});

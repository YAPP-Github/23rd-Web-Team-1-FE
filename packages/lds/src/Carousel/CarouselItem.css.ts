import { style } from '@vanilla-extract/css';

export const item = style({
  flexShrink: 0,
  width: '100%',
  height: '100%',
  scrollSnapAlign: 'center',
  scrollSnapStop: 'always',
});

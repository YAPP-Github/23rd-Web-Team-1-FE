import { style } from '@vanilla-extract/css';

export const ellipsis = style({
  overflow: 'hidden',
  display: '-webkit-box',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
});

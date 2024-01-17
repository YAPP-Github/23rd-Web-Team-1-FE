import { style } from '@vanilla-extract/css';

export const horizonScroller = style({
  overflowX: 'scroll',
  overflowY: 'hidden',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',

  selectors: {
    ['&::-webkit-scrollbar']: {
      display: 'none',
    },
  },
});

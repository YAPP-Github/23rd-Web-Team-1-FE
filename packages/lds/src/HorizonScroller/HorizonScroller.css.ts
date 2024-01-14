import { style } from '@vanilla-extract/css';

export const horizonScroller = style({
  overflowX: 'scroll',
  overflowY: 'hidden',
  maxWidth: '72rem',

  selectors: {
    ['&::-webkit-scrollbar']: {
      display: 'none',
    },
  },
});

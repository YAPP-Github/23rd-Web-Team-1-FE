import { style } from '@vanilla-extract/css';

export const listRowContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#fff',

  selectors: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

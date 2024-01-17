import { style } from '@vanilla-extract/css';

export const listWrapper = style({});

export const listItem = style({
  display: 'block',
  selectors: {
    [`${listWrapper} &:not(:first-child)`]: {
      marginTop: '2.2rem',
    },
  },
});

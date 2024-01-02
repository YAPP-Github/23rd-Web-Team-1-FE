import { style } from '@vanilla-extract/css';

export const minimizeStyle = style({});

export const header = style({
  background: 'linear-gradient(270deg, #0989FF 0%, #713EFF 98.13%)',

  selectors: {
    [`&.${minimizeStyle}`]: {
      position: 'sticky',
      top: 0,
    },
  },
});

export const headerContent = style({
  maxWidth: '720px',
  margin: '0 auto',
});

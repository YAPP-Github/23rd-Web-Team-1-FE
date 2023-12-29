import { style } from '@vanilla-extract/css';

export const minimizeStyle = style({});

export const header = style({
  background: 'linear-gradient(290.64deg, #FF8058 6.56%, #FB7A93 100.28%)',

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

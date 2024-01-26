import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const minimizeStyle = style({});

export const header = style({
  background: colors.gradationBlue,

  selectors: {
    [`&.${minimizeStyle}`]: {
      position: 'sticky',
      top: 0,
      zIndex: 1,
    },
  },
});

export const headerContent = style({
  maxWidth: '720px',
  margin: '0 auto',
});

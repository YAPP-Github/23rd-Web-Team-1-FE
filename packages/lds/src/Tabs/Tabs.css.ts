import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

import { TAB_HEIGHT } from '../constants';

export const tabs = style({
  maxWidth: '68rem',
  margin: '0 auto',
});

export const tabList = style({
  position: 'relative',
  display: 'flex',
});

export const tabItem = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});

export const activeTabItem = style({
  selectors: {
    '&:after': {
      content: '',
      position: 'absolute',
      bottom: -2,
      width: '80%',
      height: '0.4rem',
      backgroundColor: `${colors.gray000}`,
    },
  },
});

export const link = style({
  opacity: 0.3,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: TAB_HEIGHT,
});

export const activeLink = style({
  opacity: '1 !important',
  transition: 'opacity 0.1s ease-out',
});

export const bottomLine = style({
  width: '100%',
  height: '0.2rem',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
});

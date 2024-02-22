import { colors } from '@linker/styles';
import { createThemeContract, style } from '@vanilla-extract/css';

import { FAB_Z_INDEX } from '../../constants';

export const container = style({
  position: 'fixed',
  right: 0,
  bottom: '1.6rem',
  maxWidth: '68rem',
  minWidth: '4.8rem',
  width: '100%',
  height: '4.8rem',

  '@media': {
    'screen and (min-width: 680px)': {
      right: 'calc((100% - 68rem) / 2)',
    },
  },
});

export const innerContariner = style({
  padding: '0 2rem',
});

export const buttonRotate = createThemeContract({
  transform: null,
});

export const button = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '4.8rem',
  borderRadius: '5rem',
  backgroundColor: `${colors.gray900}`,
  transform: `${buttonRotate.transform}`,
  transition: 'transform 0.1s',
});

export const buttonText = style({
  color: `${colors.white} !important`,
});

export const dialog = style({
  position: 'fixed',
  right: 0,
  bottom: 0,
  zIndex: FAB_Z_INDEX,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: 12,
  maxWidth: '8.8rem',
  width: '100%',
  margin: '0 auto',
  padding: '1.6rem 2rem 7.2rem 2rem',

  '@media': {
    'screen and (min-width: 680px)': {
      right: 'calc((100% - 68rem) / 2)',
    },
  },
});

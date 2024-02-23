import { colors } from '@linker/styles';
import { createThemeContract, style } from '@vanilla-extract/css';

export const bottomSheetOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

export const styleVar = createThemeContract({
  backgroundColor: null,
});

export const content = style({
  cursor: 'pointer',
  overflowY: 'auto',
  position: 'fixed',
  left: 0,
  right: 0,
  zIndex: 'auto',
  maxWidth: '68rem',
  width: '100%',
  margin: '0 auto',
  height: '100vh',
  borderTopLeftRadius: '1.6rem',
  borderTopRightRadius: '1.6rem',
  backgroundColor: styleVar.backgroundColor,
  touchAction: 'none',
  overscrollBehavior: 'none',
});

export const handler = style({
  position: 'sticky',
  zIndex: 10,
  top: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '1.6rem',
  backgroundColor: 'inherit',

  selectors: {
    '&:after': {
      content: '',
      display: 'block',
      width: '4rem',
      height: '0.4rem',
      borderRadius: '1.6rem',
      backgroundColor: colors.gray200,
    },
  },
});

export const buttonGroupWrapper = style({
  position: 'sticky',
  zIndex: 10,
  top: '1.6rem',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.2rem 1.6rem',
  backgroundColor: 'inherit',
});

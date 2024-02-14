import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const content = style({
  cursor: 'pointer',
  position: 'fixed',
  left: 0,
  right: 0,
  zIndex: 100,
  maxWidth: '68rem',
  width: '100%',
  margin: '0 auto',
  height: 'calc(100vh + 100px)',
  borderTopLeftRadius: '1.6rem',
  borderTopRightRadius: '1.6rem',
  backgroundColor: colors.gray000,
  touchAction: 'none',
});

export const handler = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '1.6rem',

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

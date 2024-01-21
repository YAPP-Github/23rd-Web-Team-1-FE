import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  bottom: '1.6rem',
  right: 'calc((100% - 68rem) / 2)',
  zIndex: 1000,
  margin: '0 auto',
  maxWidth: '68rem',
  width: '100%',
  height: '4.8rem',
});

export const buttonRecipe = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '4.8rem',
  borderRadius: '5rem',
  backgroundColor: `${colors.gray900}`,
});

export const buttonText = style({
  color: `${colors.white} !important`,
});

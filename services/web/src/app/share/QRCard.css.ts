import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const layout = style({
  height: 'calc(100vh - 5.2rem)',
  padding: '0 3rem',
});

export const backHeader = style({
  backgroundColor: `${colors.gray000} !important`,
});

export const container = style({
  maxWidth: '66rem',
  width: '100%',
  height: '35rem',
  padding: '2rem 1.2rem',
  background: colors.gradationBlue,
});

export const logoWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const infoWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '1.2rem',
});

export const career = style({
  display: 'flex',
  alignItems: 'center',
});

export const qrWrapper = style({
  padding: '0.5rem',
  backgroundColor: colors.white,
});

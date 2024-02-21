import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vw',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  paddingTop: '2rem',
  backgroundColor: colors.white,
});
export const header = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
  justifyContent: 'space-between',
  alignItems: 'center',
});
export const textWrapper = style({
  display: 'block',
  whiteSpace: 'nowrap',
});
export const searchWrapper = style({
  paddingTop: '1.6rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const nullSearchItemWrapper = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const subtractItemWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
});

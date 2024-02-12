import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100vw',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  backgroundColor: colors.white,
});
export const header = style({
  display: 'flex',
  alignItems: 'row',
  justifyContent: 'space-between',
});

export const searchWrapper = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const nullSearchItemWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const subtractItemWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

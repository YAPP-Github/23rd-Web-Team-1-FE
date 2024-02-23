import { createThemeContract, style } from '@vanilla-extract/css';

export const bgColorVar = createThemeContract({
  backgroundColor: null,
});

export const container = style({
  maxWidth: '72rem',
  minWidth: '36rem',
  width: '100%',
  height: '100%',
  margin: '0 auto',
  backgroundColor: bgColorVar.backgroundColor,
});

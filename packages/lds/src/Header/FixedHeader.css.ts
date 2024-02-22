import { createThemeContract, style } from '@vanilla-extract/css';

export const styleVar = createThemeContract({
  display: null,
  background: null,
});

export const container = style({
  position: 'fixed',
  top: 0,
  zIndex: 'auto',
  display: `${styleVar.display}`,
  width: '100%',
  background: `${styleVar.background}`,
});

export const headerContainer = style({
  padding: '0.8rem 2rem !important',
});

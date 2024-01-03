import { createThemeContract, style } from '@vanilla-extract/css';

export const heightVar = createThemeContract({
  height: null,
});

export const container = style({
  width: '100%',
  height: `${heightVar.height}`,
});

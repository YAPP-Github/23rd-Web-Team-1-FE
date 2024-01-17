import { createThemeContract, style } from '@vanilla-extract/css';

export const colorVar = createThemeContract({
  color: null,
});

export const colorVariant = style({
  color: `${colorVar.color}`,
});

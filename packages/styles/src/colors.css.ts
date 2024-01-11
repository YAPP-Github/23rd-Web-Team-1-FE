import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const baseColors = {
  background: '#f1f3f5',
  primary: '#287cff',
};

export const colorVariants = createThemeContract({
  colors: {
    ...baseColors,
    gray000: null,
    gray100: null,
    gray200: null,
    gray300: null,
    gray400: null,
    gray500: null,
    gray600: null,
    gray700: null,
    gray800: null,
    gray900: null,
    gray950: null,
  },
});

export const { colors } = colorVariants;

export const lightThemeVars = createTheme(colorVariants, {
  colors: {
    ...baseColors,
    gray000: '#ffffff',
    gray100: '#f4f8f9',
    gray200: '#eff1f4',
    gray300: '#e2e5e8',
    gray400: '#c1c3c6',
    gray500: '#a1a5a7',
    gray600: '#797b7e',
    gray700: '#656769',
    gray800: '#46484a',
    gray900: '#242628',
    gray950: '#242424',
  },
});

export const darkThemeVars = createTheme(colorVariants, {
  colors: {
    ...baseColors,
    gray000: '#000000',
    gray100: '#f4f8f9',
    gray200: '#eff1f4',
    gray300: '#e2e5e8',
    gray400: '#c1c3c6',
    gray500: '#a1a5a7',
    gray600: '#797b7e',
    gray700: '#656769',
    gray800: '#46484a',
    gray900: '#242628',
    gray950: '#242424',
  },
});

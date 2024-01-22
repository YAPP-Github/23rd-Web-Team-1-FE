import { createTheme, createThemeContract } from '@vanilla-extract/css';

const primary = {
  blue050: '#F0F6FF',
  blue100: '#BCD6FF',
  blue200: '#9CC3FF',
  blue300: '#6FA7FF',
  blue400: '#5396FF',
  blue500: '#287CFF',
  blue600: '#2471E8',
  blue700: '#1C58B5',
  blue800: '#16448C',
  blue900: '#11346B',
};

const secondary = {
  green: '#58DB67',
  lightBlue: '#111CDF2',
  purple: '#CE7AF0',
  magenta: '#FF70B0',
  orange: '#FF875C',
};

const semantic = {
  red050: '#ffeeee',
  red100: '#ffcbcb',
  red200: '#ffb2b2',
  red300: '#ff8e8e',
  red400: '#ff7979',
  red500: '#ff5757',
  red600: '#e84f4f',
  red700: '#b53e3e',
  red800: '#8c3030',
  red900: '#6b2525',
};

const gradation = {
  gradationBlue: 'linear-gradient(to right, #713EFF, #0989FF)',
  gradationMagenta: 'linear-gradient(to right, #FB7A93, #FF586C);',
};

const baseColors = {
  white: '#ffffff',
  black: '#000000',
  background: '#f1f3f5',
  ...primary,
  ...secondary,
  ...semantic,
  ...gradation,
};

const colorVariants = createThemeContract({
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

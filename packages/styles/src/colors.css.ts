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
  lightBlue: '#11CDF2',
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
  gradationPurple: 'linear-gradient(to right, #7559EC, #4E7EEA)',
  gradationMagenta: 'linear-gradient(to right, #FB7A93, #FF586C);',
};

const baseColors = {
  white: '#ffffff',
  black: '#000000',
  background: '#f1f3f5',
  overay: 'rgba(0, 0, 0, 0.6)',
  kakao: '#F8DF02',
  kakaoText: '#391B1B',
  ...primary,
  ...secondary,
  ...semantic,
  ...gradation,
};

const colorVariants = createThemeContract({
  colors: {
    ...baseColors,
    gray000: null,
    gray050: null,
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
    gray000: '#FFFFFF',
    gray050: '#F4F6F9',
    gray100: '#EFF1F4',
    gray200: '#E2E5E8',
    gray300: '#C1C3C6',
    gray400: '#A1A5A7',
    gray500: '#96999D',
    gray600: '#797B7E',
    gray700: '#656769',
    gray800: '#46484A',
    gray900: '#242628',
    gray950: '#0E0E0E',
  },
});

export const darkThemeVars = createTheme(colorVariants, {
  colors: {
    ...baseColors,
    gray000: '#FFFFFF',
    gray050: '#F4F6F9',
    gray100: '#EFF1F4',
    gray200: '#E2E5E8',
    gray300: '#C1C3C6',
    gray400: '#A1A5A7',
    gray500: '#96999D',
    gray600: '#797B7E',
    gray700: '#656769',
    gray800: '#46484A',
    gray900: '#242628',
    gray950: '#0E0E0E',
  },
});

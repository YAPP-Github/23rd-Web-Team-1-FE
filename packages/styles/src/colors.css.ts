import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const baseColors = {
  background: '#f1f3f5',
};

export const colorVariants = createThemeContract({
  colors: {
    ...baseColors,
    grey005: null,
    grey010: null,
    grey020: null,
    grey030: null,
    grey040: null,
    grey050: null,
    grey060: null,
    grey070: null,
    grey080: null,
  },
});

export const { colors } = colorVariants;

export const lightThemeVars = createTheme(colorVariants, {
  colors: {
    ...baseColors,
    grey005: '#fefefe',
    grey010: '#fdfdfd',
    grey020: '#f7f8f9',
    grey030: '#e9ebee',
    grey040: '#c5c8ce',
    grey050: '#646f7c',
    grey060: '#374553',
    grey070: '#28323c',
    grey080: '#161d24',
  },
});

export const darkThemeVars = createTheme(colorVariants, {
  colors: {
    ...baseColors,
    grey005: '#171b1c',
    grey010: '#1e2427',
    grey020: '#2e363a',
    grey030: '#41474c',
    grey040: '#5a6166',
    grey050: '#999fa4',
    grey060: '#c5c8c3',
    grey070: '#f7f8f9',
    grey080: '#fdfdfd',
  },
});

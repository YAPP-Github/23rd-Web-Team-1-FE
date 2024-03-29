import { colors } from '@linker/styles';
import { createThemeContract, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const colorVar = createThemeContract({
  color: null,
});

export const colorVariant = style({
  color: `${colorVar.color}`,
});

export const chipContainer = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '3.6rem',
    padding: '0.8rem 1.4rem',
    borderRadius: '20px',
    backgroundColor: `${colors.gray950}`,
  },

  variants: {
    variant: {
      default: {
        border: `1px solid ${colors.gray950}`,
        backgroundColor: `${colors.gray950}`,
      },
      outlined: {
        border: `1px solid ${colors.gray200}`,
        backgroundColor: `${colors.white}`,
      },
    },
  },

  defaultVariants: {
    variant: 'outlined',
  },
});

export const groupContainer = style({
  display: 'flex',
  gap: '0.8rem',
  width: 'max-content',
});

export const deleteButton = style({
  marginLeft: '0.8rem',
});

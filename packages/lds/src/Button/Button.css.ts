import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const baseStyle = recipe({
  base: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.8rem',
    transition: 'transform ease-out 0.2s',

    selectors: {
      '&:active': {
        transform: 'scale(0.96)',
        transition: 'transform ease-out 0.1s',
      },

      '&:disabled': {
        opacity: 0.64,
        cursor: 'not-allowed',
      },
    },
  },

  variants: {
    variant: {
      primary: {
        color: colors.white,
        backgroundColor: colors.blue500,

        selectors: {
          '&:active': {
            backgroundColor: colors.blue600,
          },
          '&:disabled': {
            backgroundColor: colors.blue100,
          },
        },
      },
      secondary: {
        color: colors.gray700,
        backgroundColor: colors.gray050,

        selectors: {
          '&:active': {
            backgroundColor: colors.gray100,
          },
          '&:disabled': {
            color: colors.gray400,
            backgroundColor: colors.gray100,
          },
        },
      },
    },

    size: {
      small: {
        minWidth: '7rem',
        height: '4rem',
        padding: '1rem 1.6rem',
      },
      medium: {
        minWidth: '8.2rem',
        height: '5.2rem',
        padding: '1.4rem 1.6rem',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export const rightAddonItem = style({
  marginTop: '-0.2rem',
});

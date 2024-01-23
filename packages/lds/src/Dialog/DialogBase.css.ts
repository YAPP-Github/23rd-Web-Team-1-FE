import { colors } from '@linker/styles';
import { recipe } from '@vanilla-extract/recipes';

export const dialogOverlay = recipe({
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
  },

  variants: {
    overlayTheme: {
      dark: {
        backgroundColor: `${colors.overay}`,
      },
      transparent: {
        backgroundColor: 'transparent',
      },
    },
  },

  defaultVariants: {
    overlayTheme: 'dark',
  },
});

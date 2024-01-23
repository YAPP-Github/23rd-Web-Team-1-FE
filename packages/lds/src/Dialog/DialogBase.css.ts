import { colors } from '@linker/styles';
import { recipe } from '@vanilla-extract/recipes';

export const dialogOverlay = recipe({
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 'auto',
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

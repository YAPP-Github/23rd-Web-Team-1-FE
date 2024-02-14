import { colors } from '@linker/styles';
import { recipe } from '@vanilla-extract/recipes';

import { DIALOG_Z_INDEX } from '../constants';

export const dialogOverlay = recipe({
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: DIALOG_Z_INDEX,
    width: '100vw',
    height: '100vh',
    minHeight: '100%',
  },

  variants: {
    overlayTheme: {
      dark: {
        backgroundColor: `${colors.overlay}`,
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

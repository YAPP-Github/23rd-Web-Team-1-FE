import { recipe } from '@vanilla-extract/recipes';

import { font } from './themes.css';

export const typography = recipe({
  base: {
    letterSpacing: font.letterSpacing2,
  },

  variants: {
    type: {
      h1: {
        fontSize: font.size40,
        lineHeight: font.lineHeight56,
      },
      h2: {
        fontSize: font.size36,
        lineHeight: font.lineHeight52,
      },
      h3: {
        fontSize: font.size32,
        lineHeight: font.lineHeight44,
      },
      h4: {
        fontSize: font.size28,
        lineHeight: font.lineHeight40,
      },
      h5: {
        fontSize: font.size24,
        lineHeight: font.lineHeight36,
      },
      h6: {
        fontSize: font.size20,
        lineHeight: font.lineHeight28,
      },
      h7: {
        fontSize: font.size18,
        lineHeight: font.lineHeight26,
      },
      p1: {
        fontSize: font.size16,
        lineHeight: font.lineHeight24,
      },
      p2: {
        fontSize: font.size15,
        lineHeight: font.lineHeight22,
      },
      p3: {
        fontSize: font.size14,
        lineHeight: font.lineHeight20,
      },
      p4: {
        fontSize: font.size13,
        lineHeight: font.lineHeight18,
      },
      p5: {
        fontSize: font.size12,
        lineHeight: font.lineHeight16,
      },
      b1: {
        fontSize: font.size16,
        lineHeight: font.lineHeight24,
        letterSpacing: font.letterSpacing1,
      },
      b2: {
        fontSize: font.size14,
        lineHeight: font.lineHeight20,
        letterSpacing: font.letterSpacing1,
      },
      b3: {
        fontSize: font.size13,
        lineHeight: font.lineHeight18,
        letterSpacing: font.letterSpacing1,
      },
      b4: {
        fontSize: font.size12,
        lineHeight: font.lineHeight16,
        letterSpacing: font.letterSpacing1,
      },
    },

    fontWeight: {
      regular: {
        fontWeight: font.regular,
      },
      medium: {
        fontWeight: font.medium,
      },

      bold: {
        fontWeight: font.bold,
      },
      extrabold: {
        fontWeight: font.extrabold,
      },
      h1: {
        fontWeight: font.bold,
      },
      h2: {
        fontWeight: font.bold,
      },
      h3: {
        fontWeight: font.bold,
      },
      h4: {
        fontWeight: font.bold,
      },
      h5: {
        fontWeight: font.bold,
      },
      h6: {
        fontWeight: font.bold,
      },
      h7: {
        fontWeight: font.bold,
      },
      p1: {
        fontWeight: font.medium,
      },
      p2: {
        fontWeight: font.medium,
      },
      p3: {
        fontWeight: font.medium,
      },
      p4: {
        fontWeight: font.medium,
      },
      p5: {
        fontWeight: font.medium,
      },
      b1: {
        fontWeight: font.bold,
      },
      b2: {
        fontWeight: font.bold,
      },
      b3: {
        fontWeight: font.medium,
      },
      b4: {
        fontWeight: font.medium,
      },
    },
  },
});

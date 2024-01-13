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
        fontWeight: font.bold,
        lineHeight: font.lineHeight56,
      },
      h2: {
        fontSize: font.size36,
        fontWeight: font.bold,
        lineHeight: font.lineHeight52,
      },
      h3: {
        fontSize: font.size32,
        fontWeight: font.bold,
        lineHeight: font.lineHeight44,
      },
      h4: {
        fontSize: font.size28,
        fontWeight: font.bold,
        lineHeight: font.lineHeight40,
      },
      h5: {
        fontSize: font.size24,
        fontWeight: font.bold,
        lineHeight: font.lineHeight36,
      },
      h6: {
        fontSize: font.size20,
        fontWeight: font.bold,
        lineHeight: font.lineHeight28,
      },
      h7: {
        fontSize: font.size18,
        fontWeight: font.bold,
        lineHeight: font.lineHeight26,
      },
      p1: {
        fontSize: font.size16,
        fontWeight: font.medium,
        lineHeight: font.lineHeight24,
      },
      p2: {
        fontSize: font.size14,
        fontWeight: font.medium,
        lineHeight: font.lineHeight20,
      },
      p3: {
        fontSize: font.size13,
        fontWeight: font.medium,
        lineHeight: font.lineHeight18,
      },
      p4: {
        fontSize: font.size12,
        fontWeight: font.medium,
        lineHeight: font.lineHeight16,
      },
      b1: {
        fontSize: font.size16,
        fontWeight: font.bold,
        lineHeight: font.lineHeight24,
      },
      b2: {
        fontSize: font.size14,
        fontWeight: font.bold,
        lineHeight: font.lineHeight24,
      },
      b3: {
        fontSize: font.size13,
        fontWeight: font.bold,
        lineHeight: font.lineHeight24,
      },
      b4: {
        fontSize: font.size12,
        fontWeight: font.bold,
        lineHeight: font.lineHeight24,
      },
    },
  },
});

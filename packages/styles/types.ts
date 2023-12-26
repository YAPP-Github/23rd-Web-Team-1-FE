import { RecipeVariants } from '@vanilla-extract/recipes';

import { typography } from './src/typography.css';

export type TypographyVariants = NonNullable<RecipeVariants<typeof typography>>;

export type Typography =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'p4'
  | 'b1';

export type FontWeight = 'regular' | 'medium' | 'bold' | 'extrabold';

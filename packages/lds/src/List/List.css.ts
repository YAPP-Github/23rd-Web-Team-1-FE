import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const listContainer = style({
  width: '100%',
  margin: '0 auto',
  padding: '0 1.6rem',
});

export const listContent = style({
  width: '100%',
  height: '100%',
  padding: '1.6rem 2rem',
  borderRadius: '0.8rem',
  background: `${colors.gray000}`,
});

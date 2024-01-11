import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const listContainer = style({
  margin: '0 1.6rem',
});

export const listContent = style({
  minWidth: '34.3rem',
  width: '100%',
  height: '100%',
  padding: '1.6rem 2rem',
  borderRadius: '0.8rem',
  backgroundColor: `${colors.gray000}`,
});

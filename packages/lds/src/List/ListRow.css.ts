import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const listRowContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: `${colors.gray000}`,

  selectors: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

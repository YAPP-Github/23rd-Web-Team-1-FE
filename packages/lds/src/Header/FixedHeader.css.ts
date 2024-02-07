import { colors } from '@linker/styles';
import { createThemeContract, style } from '@vanilla-extract/css';

import { HEADER_Z_INDEX } from '../constants';

export const displayVar = createThemeContract({
  display: null,
});

export const container = style({
  position: 'fixed',
  top: 0,
  zIndex: HEADER_Z_INDEX,
  display: `${displayVar.display}`,
  width: '100%',
  background: colors.gradationBlue,
});

export const headerContainer = style({
  padding: '0.8rem 2rem !important',
});

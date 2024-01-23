import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

import { MODAL_Z_INDEX } from '../constants';

export const modalContent = style({
  position: 'absolute',
  top: '12rem',
  left: 0,
  right: 0,
  maxWidth: '72rem',
  maxHeight: '72rem',
  width: '100%',
  height: '100%',
  margin: '0 auto',
  backgroundColor: `${colors.gray000}`,
  zIndex: `${MODAL_Z_INDEX}`,
});

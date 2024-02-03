import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

import { MODAL_Z_INDEX } from '../constants';

export const modalContent = style({
  position: 'absolute',
  top: 'calc(100vh / 5)',
  left: 0,
  right: 0,
  maxWidth: '32rem',
  maxHeight: '68rem',
  width: '100%',
  margin: '0 auto',
  padding: '2rem',
  borderRadius: '2rem',
  backgroundColor: `${colors.gray000}`,
  zIndex: `${MODAL_Z_INDEX}`,
});

export const modalBottom = style({
  position: 'absolute',
  bottom: '2rem',
  width: '28rem',
});

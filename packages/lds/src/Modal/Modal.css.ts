import { style } from '@vanilla-extract/css';

export const modalContent = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
  width: '100%',
  maxWidth: '72rem',
  height: '100%',
  maxHeight: '72rem',
  backgroundColor: '#fff',
  zIndex: 1000,
});

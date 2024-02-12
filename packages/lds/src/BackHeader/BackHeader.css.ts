import { style } from '@vanilla-extract/css';

export const header = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '52px',
  padding: '10px 20px',
  boxSizing: 'border-box',
});

export const backButton = style({
  position: 'absolute',
  top: '50%',
  left: '20px',
  transform: 'translateY(-50%)',
});

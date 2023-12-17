import { style } from '@vanilla-extract/css';

export const wrapper = style({
  width: '100%',
  padding: '16px 20px',
  boxSizing: 'border-box',
});

export const logo = style({
  margin: 0,
  fontSize: '2rem',
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: '#ffffff',
});

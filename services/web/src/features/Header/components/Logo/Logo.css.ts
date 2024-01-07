import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  width: '100%',
  padding: '14px 20px',
  boxSizing: 'border-box',
});

export const logo = style({
  margin: 0,
  fontSize: '2rem',
  fontWeight: 'bold',
  lineHeight: '2.4rem',
  fontStyle: 'italic',
  color: `${colors.gray000}`,
});

import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const linkButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '4.8rem',
  height: '4.8rem',
  borderRadius: '5rem',
  backgroundColor: `${colors.white}`,
  boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.12)',
});

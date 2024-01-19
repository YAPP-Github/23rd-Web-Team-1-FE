import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const searchInputContainer = style({
  background: `${colors.gray100}`,
  width: '100%',
  borderRadius: '0.4rem',
  height: '4.4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  flexDirection: 'row',
  padding: '1.4rem 0 1.4rem 1.9rem',
  gap: '6px',
});

export const searchInput = style({
  zIndex: 1,
  width: '100%',
  border: 'none',
  background: 'none',
  outline: 'none',
  '::placeholder': {
    fontFamily: 'Pretendard',
    fontWeight: '500',
    fontStyle: 'normal',
    color: `${colors.black}`,
  },
});

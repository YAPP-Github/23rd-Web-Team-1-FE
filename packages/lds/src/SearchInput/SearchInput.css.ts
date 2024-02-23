import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const searchInputContainer = style({
  background: `${colors.gray050}`,
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
  width: '100%',
  border: 'none',
  background: 'none',
  backgroundColor: 'transparent',
  color: `${colors.gray500}`,
  outline: 'none',
  cursor: 'pointer',
  '::placeholder': {
    color: `${colors.gray500}`,
  },
});

export const searchInputWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.6rem',
});

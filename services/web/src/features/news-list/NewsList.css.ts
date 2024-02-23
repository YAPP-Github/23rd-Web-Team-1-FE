import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  marginTop: '1.2rem',
  backgroundColor: colors.white,
});

export const chipWrapper = style({
  display: 'flex',
  gap: '0.8rem',
  overflowY: 'auto',
  padding: '1rem 2rem',
});

export const chip = style({
  minWidth: 'fit-content',
});

export const newsListWrapper = style({
  marginTop: '0.8rem',
  padding: '0 2rem',
});

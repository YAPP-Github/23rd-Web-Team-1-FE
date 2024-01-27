import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  position: 'relative',
});

export const headerTitle = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const iconWrapper = style({
  width: '2.8rem',
  height: '2.8rem',
  marginRight: '0.8rem',
});

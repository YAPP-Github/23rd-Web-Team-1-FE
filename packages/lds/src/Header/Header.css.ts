import { style } from '@vanilla-extract/css';

import { HEADER_HEIGHT } from '../constants';

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '72rem',
  height: HEADER_HEIGHT,
  margin: '0 auto',
  padding: '1.4rem 2rem',
});

export const rightItem = style({
  display: 'flex',
  gap: '1rem',
});

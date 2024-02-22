import { style } from '@vanilla-extract/css';

export const favoritesWrapper = style({
  paddingTop: '38px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});
export const favoritesTextWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '4px',
});
export const favoriteDropDown = style({
  cursor: 'pointer',
});
export const totalCountWrapper = style({
  paddingTop: '38px',
  display: 'flex',
  flexDirection: 'row',
  gap: '1px',
});

export const profileWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '26px',
  gap: '16px',
});

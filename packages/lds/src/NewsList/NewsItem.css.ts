import { ellipsis } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const newsWrapper = style({
  marginTop: '0.8rem',
});

export const itemWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1.6rem',
  padding: '16px 0',
});

export const newsInfo = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: '0.6rem',
  overflow: 'hidden',
});

export const newsTitle = style([
  ellipsis,
  {
    WebkitLineClamp: 2,
  },
]);

export const newsImage = style({
  minWidth: '7.4rem',
});

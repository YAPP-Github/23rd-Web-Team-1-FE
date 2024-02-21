import { ellipsis, colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

import { newsListWrapper } from './NewsList.css';

export const itemWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1.6rem',
  padding: '16px 0',

  selectors: {
    [`${newsListWrapper} &:not(:first-child)`]: {
      borderTop: `1px solid ${colors.gray100}`,
    },
  },
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
  borderRadius: '0.4rem',
});

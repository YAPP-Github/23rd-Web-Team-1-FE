import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  paddingTop: '2rem',
});

export const tagWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
});

export const newsItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1.6rem',
  padding: '1.6rem 0',

  selectors: {
    '&:not(:first-child)': {
      borderTop: `1px solid ${colors.gray200}`,
    },
  },
});

export const newsContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: '0.6rem',
  overflow: 'hidden',
});

export const newsTitle = style({
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
});

export const newsImage = style({
  borderRadius: '0.4rem',
});

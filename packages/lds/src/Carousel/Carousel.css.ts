import { style } from '@vanilla-extract/css';

export const carouselContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const carouselWrapper = style({
  width: '100%',
  height: '100%',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',

  msOverflowStyle: 'none' /* IE and Edge */,
  scrollbarWidth: 'none' /* Firefox */,
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none' /* Chrome, Safari, Opera */,
    },
  },
});

export const itemWrapper = style({
  display: 'flex',
  width: '100%',
  height: '100%',
  padding: 0,
  margin: 0,
  listStyle: 'none',
});

export const dotsWrapper = style({
  display: 'flex',
  gap: '6px',
  marginTop: '12px',
});

export const activeStyle = style({});

export const dot = style({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: '#b9babc',

  selectors: {
    [`&.${activeStyle}`]: {
      backgroundColor: '#050a11',
    },
  },
});

import { style } from '@vanilla-extract/css';

export const carouselContainer = style({
  width: '100%',
  height: '100%',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  backgroundColor: 'rgb(230, 230, 230)',

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
});

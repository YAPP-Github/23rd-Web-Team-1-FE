import { style } from '@vanilla-extract/css';
import {} from '@linker/styles';

export const swiperContainer = style({
  width: '100%',
  height: '100%',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  backgroundColor: 'rgb(230, 230, 230)',
});

export const itemWrapper = style({
  display: 'flex',
});

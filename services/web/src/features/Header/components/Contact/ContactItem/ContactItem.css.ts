import { style } from '@vanilla-extract/css';

export const contactItemWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '7px',
});

export const careerTextWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '4px',
  alignItems: 'baseline',
});

export const imageWrapper = style({
  borderRadius: '50px',
  overflow: 'hidden',
});

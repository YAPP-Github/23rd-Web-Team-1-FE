import { colors } from '@linker/styles';
import { style, keyframes } from '@vanilla-extract/css';

const keyframesExample = keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale(0.95)',
    background: colors.gradationPurple,
  },
  '50%': {
    opacity: 0.5,
    transform: 'scale(0.98)',
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1)',
    background: colors.gradationPurple,
  },
});

export const bannerContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '72rem',
  background: `${colors.gradationPurple} !important`,
  animation: `${keyframesExample} 0.4s linear`,
});

export const imageWrapper = style({
  marginRight: '1.2rem',
});

export const contentWrapper = style({
  display: 'flex',
});

export const text = style({
  lineHeight: '2.4rem',
});

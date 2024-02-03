import { colors } from '@linker/styles';
import { keyframes, style } from '@vanilla-extract/css';

const skeletonKeyframes = keyframes({
  from: {
    backgroundPosition: '150% 0',
  },
  to: {
    backgroundPosition: '-50% 0',
  },
});

export const skeleton = style({
  animation: `${skeletonKeyframes} 1.2s infinite linear both`,
  backgroundColor: colors.gray050,
  background: `linear-gradient(90deg, #f2f4f6ff 0%, #ffffffb3 50%, #f2f4f6ff 100%)`,
  backgroundSize: '200%',
  overflow: 'hidden',
  position: 'relative',
  borderRadius: '0.4rem',
});

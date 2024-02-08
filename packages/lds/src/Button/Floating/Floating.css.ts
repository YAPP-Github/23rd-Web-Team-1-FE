import { colors } from '@linker/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const bottomSpacing = styleVariants({
  timeline: { bottom: '-8rem' },
  scheduleDetail: { bottom: '-10rem' },
});
export const container = style({
  width: '16rem',
  border: `1px solid ${colors.gray200}`,
  boxShadow: '0px 0px 6px 0px #0000001A',
  position: 'absolute',
  right: '0.2rem',
  display: 'inline-block',
  borderRadius: '1.6rem',
  background: colors.white,
  zIndex: '10',
});

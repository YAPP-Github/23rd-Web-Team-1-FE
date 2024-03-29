import { colors } from '@linker/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const bottomSpacing = styleVariants({
  timeline: { bottom: '-8rem' },
  scheduleDetail: { bottom: '-10rem' },
});
export const timelineContainer = style({
  width: '16rem',
  border: `1px solid ${colors.gray200}`,
  boxShadow: '0px 0px 6px 0px #0000001A',
  position: 'absolute',
  right: '0.2rem',
  display: 'inline-block',
  borderRadius: '1.6rem',
  background: colors.white,
  zIndex: '10',
  bottom: '-8rem',
});
export const scheduleContainer = style({
  width: '16rem',
  border: `1px solid ${colors.gray200}`,
  boxShadow: '0px 0px 6px 0px #0000001A',
  position: 'absolute',
  right: '0.2rem',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '1.6rem',
  background: colors.gray000,
  zIndex: '10',
  bottom: '-10rem',
});

export const dropdownItemContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '1.4rem',
});

export const dropdownTrigger = style({
  width: '100%',
});

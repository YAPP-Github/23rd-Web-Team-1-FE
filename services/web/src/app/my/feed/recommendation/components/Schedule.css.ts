import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  gap: '1.4rem',
  padding: '2rem 0rem 1.6rem',
  borderBottom: `1px solid ${colors.gray200}`,
});

export const profileImageWrapper = style({
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '5.6rem',
  height: '5.6rem',
  borderRadius: '40%',
  backgroundColor: colors.background,
});

export const scheduleInfoWrapper = style({
  flex: '1',
  overflow: 'hidden',
});

export const scheduleDateWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
});

export const scheduleDateInfo = style({
  display: 'block',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

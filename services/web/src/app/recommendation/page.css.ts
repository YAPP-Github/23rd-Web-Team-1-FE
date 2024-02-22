import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const scheduleWrapper = style({
  display: 'flex',
  gap: '1rem',
  marginTop: '1.2rem',
});

export const sideBar = style({
  alignSelf: 'stretch',
  width: '0.4rem',
  backgroundColor: colors.green,
  borderRadius: '2px',
});

export const scheduleInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

export const infoItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
});

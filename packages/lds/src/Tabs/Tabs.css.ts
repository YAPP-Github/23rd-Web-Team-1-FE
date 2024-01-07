import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const tabs = style({
  position: 'sticky',
  top: 0,
  width: '100%',
});

export const tapList = style({
  position: 'relative',
  display: 'flex',
});

export const tapItem = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});

export const link = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '94px',
  height: '48px',
  fontSize: '1.6rem',
  color: 'rgba(255, 255, 255, 0.3)',
  fontWeight: 'bold',
});

export const activeLink = style({
  color: `${colors.gray000}`,
});

export const bottomLine = style({
  position: 'relative',
  width: '100%',
  height: '4px',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
});

export const activeLine = style({
  position: 'absolute',
  height: '100%',
  backgroundColor: `${colors.gray000}`,
  transition: 'left 0.1s ease-out',
});

import { style } from '@vanilla-extract/css';

export const tabs = style({
  position: 'sticky',
  top: 0,
  width: '100%',
});

export const tapList = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const tapItem = style({
  width: '94px',
  height: '48px',
});

export const link = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  fontSize: '1.6rem',
  color: 'rgba(255, 255, 255, 0.3)',
  fontWeight: 'bold',
});

export const activeLink = style({
  color: '#ffffff',
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
  backgroundColor: '#ffffff',
  transition: 'left 0.1s ease-out',
});

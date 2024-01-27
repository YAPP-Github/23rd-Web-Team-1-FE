import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  width: '13rem',
  minWidth: '13rem',
  height: '15.2rem',
  padding: '1.8rem 1.2rem 1.2rem',
  boxSizing: 'border-box',
  border: `1px solid ${colors.gray200}`,
  borderRadius: '1.2rem',
});

export const scheduleInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
  padding: '0 0.4rem',
});

export const titleInfo = style({
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
});

export const button = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.4rem',
  width: '100%',
  height: '3rem',
  marginTop: 'auto',
  backgroundColor: '#f0f6ff',
  borderRadius: '0.6rem',
});

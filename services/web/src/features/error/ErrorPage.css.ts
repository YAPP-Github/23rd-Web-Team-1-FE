import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '90vh',
});

export const title = style({
  margin: '2.4rem 0 0.8rem',
});

export const errorMessage = style({
  marginTop: '2.8rem',
  textAlign: 'center',
  width: 'calc(100% - 4rem)',
});

export const cta = style({
  position: 'fixed',
  bottom: '1.6rem',
  maxWidth: '72rem',
  minWidth: '36rem',
  width: 'calc(100% - 4rem)',
});

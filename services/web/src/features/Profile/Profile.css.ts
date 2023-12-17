import { style } from '@vanilla-extract/css';

export const profileWrapper = style({
  display: 'flex',
  alignItems: 'center',
  padding: '1.4rem 2.3rem 2.4rem',
});

export const profileImageWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '7.2rem',
  height: '7.2rem',
  boxSizing: 'content-box',
  border: '3px solid #49a15f',
  borderRadius: '50%',
});

export const profileImage = style({
  width: '6.7rem',
  height: '6.7rem',
  objectFit: 'cover',
  objectPosition: 'top',
  borderRadius: '50%',
});

export const profileInfo = style({
  marginLeft: '2.2rem',
  color: '#ffffff',
});

export const name = style({
  fontSize: '2.4rem',
  fontWeight: 'bold',
});

export const job = style({
  marginTop: '4px',
  fontSize: '1.4rem',
  fontWeight: 'normal',
});

export const tag = style({
  marginTop: '6px',
  fontSize: '1.2rem',
  fontWeight: 'normal',
});

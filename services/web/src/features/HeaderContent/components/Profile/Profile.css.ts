import { style } from '@vanilla-extract/css';

export const minimizeStyle = style({});

export const profileWrapper = style({
  display: 'flex',
  alignItems: 'center',
  padding: '1.4rem 2.3rem 2.4rem',

  selectors: {
    [`&.${minimizeStyle}`]: {
      padding: '1.2rem 2.3rem 1.4rem',
    },
  },
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

  selectors: {
    [`&.${minimizeStyle}`]: {
      width: '3.4rem',
      height: '3.4rem',
    },
  },
});

export const profileImage = style({
  width: '6.7rem',
  height: '6.7rem',
  objectFit: 'cover',
  objectPosition: 'top',
  borderRadius: '50%',

  selectors: {
    [`&.${minimizeStyle}`]: {
      width: '3rem',
      height: '3rem',
    },
  },
});

export const profileInfo = style({
  marginLeft: '2.2rem',
  color: '#ffffff',
});

export const name = style({
  fontSize: '2.4rem',
  fontWeight: 'bold',

  selectors: {
    [`&.${minimizeStyle}`]: {
      fontSize: '1.6rem',
    },
  },
});

export const job = style({
  marginTop: '4px',
  fontSize: '1.4rem',
  fontWeight: 'normal',

  selectors: {
    [`&.${minimizeStyle}`]: {
      display: 'none',
    },
  },
});

export const tag = style({
  marginTop: '6px',
  fontSize: '1.2rem',
  fontWeight: 'normal',

  selectors: {
    [`&.${minimizeStyle}`]: {
      display: 'none',
    },
  },
});

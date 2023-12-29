import { style } from '@vanilla-extract/css';

export const minimizeStyle = style({});

export const profileWrapper = style({
  display: 'flex',
  alignItems: 'center',
  padding: '2rem',

  selectors: {
    [`&.${minimizeStyle}`]: {
      padding: '1.2rem 2rem',
    },
  },
});

export const profileImageWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  width: '7.2rem',
  height: '7.2rem',
  boxSizing: 'content-box',
  border: '2px solid #FFFFFF',
  borderRadius: '42%',

  selectors: {
    [`&.${minimizeStyle}`]: {
      width: '4rem',
      height: '4rem',
    },
  },
});

export const profileImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'top',
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

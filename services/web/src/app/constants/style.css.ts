import { globalStyle } from '@vanilla-extract/css';

export const GlobalStyle = [
  globalStyle('html, body', {
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    height: '100%',
  }),
  globalStyle('*, *:before, *:after', {
    boxSizing: 'border-box',
  }),
  globalStyle('focus', {
    outline: 'none',
    border: 'none',
  }),
  globalStyle('button', {
    background: 'none',
    padding: 0,
    border: 'none',
    cursor: 'pointer',
  }),
  globalStyle('a', {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
  }),
  globalStyle('table', { borderCollapse: 'collapse', borderSpacing: 0 }),

  globalStyle('img, picture, video, canvas, svg ', { display: 'block', maxWidth: '100%' }),
];

import { globalStyle } from '@vanilla-extract/css';

export const GlobalStyle = [
  globalStyle('html', {
    fontSize: '62.5%',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    height: '100%',
  }),
  globalStyle('body', {
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    fontSize: '1.6rem',
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
  globalStyle('ul', { padding: 0, margin: 0, listStyle: 'none' }),
  globalStyle('figure', { padding: 0, margin: 0 }),
  globalStyle('h1, h2, h3, h4, h5, h6', { margin: 0, padding: 0 }),
];

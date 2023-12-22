import { globalStyle } from '@vanilla-extract/css';

export const GlobalStyle = [
  globalStyle('html', {
    fontSize: '62.5%',
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    height: '100%',
    // 폰트 크기 팽창 제한
    MozTextSizeAdjust: 'none',
    WebkitTextSizeAdjust: 'none',
    textSizeAdjust: 'none',
  }),
  globalStyle('body', {
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    fontSize: '1.6rem',
    marginBlockEnd: 'none',
    minHeight: '100vh',
    lineHeight: 1.5,
  }),
  globalStyle('h1, h2, h3, h4, button,input,label', {
    lineHeight: 1.1,
  }),
  globalStyle('*, *:before, *:after', {
    boxSizing: 'border-box',
  }),
  globalStyle('focus', {
    outline: 'none',
    border: 'none',
  }),
  globalStyle('p, h1, h2, h3, h4, figure, blackquote, dl, dd', {
    // 기본 여백제거
    margin: 0,
  }),
  globalStyle('ul[role="list"], ol[role="list"]', {
    //list를 role값으로 갖는 ul, ol 요소의 기본 목록 스타일을 제거
    listStyle: 'none',
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
  globalStyle('input, button, textarea,select', {
    //input 및 button 항목들이 글꼴을 상속하도록
    font: 'inherit',
  }),
  globalStyle('textarea:not([rows])', {
    //행 속성이 없는 textarea가 너무 작지 않도록
    minHeight: '10em',
  }),
  globalStyle('target', {
    // 고정된 모든 항목에는 여분의 스크롤 여백
    scrollMarginBlock: '5ex',
  }),
  globalStyle('img, picture, video, canvas, svg ', { display: 'block', maxWidth: '100%' }),
];

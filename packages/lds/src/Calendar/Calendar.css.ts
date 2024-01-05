import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  fontFamily: 'Pretendard',
  border: 'none ',
  backgroundColor: '#fff',
});

export const dot = style({
  position: 'absolute',
  top: '0.9rem',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '0.4rem',
  width: '0.4rem',
  borderRadius: '50%',
  backgroundColor: '#287CFF',
});

globalStyle(`${container} *`, {
  textDecoration: 'none !important',
});

globalStyle(`${container} abbr`, {
  position: 'relative',
});

globalStyle(`${container} .react-calendar__navigation`, {
  height: '3.6rem',
  marginBottom: 0,
  padding: '0 8.4rem 0 8.4rem',
});

globalStyle(`${container} .react-calendar__navigation__label__labelText`, {
  display: 'inline-block',
  marginTop: '0.4rem',
});

globalStyle(`${container} .react-calendar__navigation__arrow`, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

globalStyle(`${container} .react-calendar__navigation button:focus`, {
  backgroundColor: '#fff',
});

globalStyle(`${container} .react-calendar__navigation button:hover`, {
  backgroundColor: 'transparent',
});

globalStyle(`${container} .react-calendar__navigation button:disabled`, {
  color: '#000',
  letterSpacing: '-0.2px',
  fontSize: '1.6rem',
  fontWeight: 700,
  lineHeight: '2.4rem',
  backgroundColor: '#fff',
});

globalStyle(`${container} .react-calendar__navigation button:disabled`, {
  color: '#000',
  letterSpacing: '-0.2px',
  fontSize: '1.6rem',
  fontWeight: 700,
  lineHeight: '2.4rem',
  backgroundColor: '#fff',
});

globalStyle(`${container} .react-calendar__month-view`, {
  padding: '0.4rem 2.8rem',
});

globalStyle(`${container} .react-calendar__month-view__weekdays`, {
  fontSize: '1.2rem',
  fontWeight: 400,
  color: '#888888',
});

globalStyle(`${container} .react-calendar__month-view__days__day`, {
  height: '4.2rem',
  fontSize: '1.4rem',
  fontWeight: 700,
});

globalStyle(`${container} .react-calendar__month-view__days__day--weekend`, {
  color: '#FF5757',
});

globalStyle(`${container} .react-calendar__tile`, {
  position: 'relative',
  backgroundColor: '#fff',
});

globalStyle(`${container} .react-calendar__tile--active::before`, {
  width: '3.6rem',
  height: '3.6rem',
  borderRadius: '50%',
  color: '#fff',
  backgroundColor: '#D6DDE4',
});

globalStyle(`${container} .react-calendar__tile::before`, {
  content: '',
  position: 'absolute',
  display: 'block',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '3.6rem',
  height: '3.6rem',
  borderRadius: '50%',
  color: '#fff',
});

globalStyle(`${container} .react-calendar__tile--now`, {
  position: 'relative',
  color: '#287CFF !important',
  backgroundColor: '#fff',
});

globalStyle(`${container} .react-calendar__tile:enabled:hover`, {
  color: '#fff',
  backgroundColor: 'transparent',
});

globalStyle(`${container} .react-calendar__tile:enabled:focus`, {
  color: '#fff',
  backgroundColor: 'transparent',
});

globalStyle(`${container} .react-calendar__tile:enabled:hover::before`, {
  background: '#D6DDE4',
});

globalStyle(`${container} .react-calendar__tile--active:enabled:focus`, {
  color: '#fff',
  background: 'transparent',
});

globalStyle(`${container} .react-calendar__tile:enabled:focus::before`, {
  background: '#D6DDE4',
});

/* eslint-disable max-lines */
import { globalStyle, keyframes, style } from '@vanilla-extract/css';

const fadeOut = keyframes({
  '0%': {
    opacity: '1',
    transform: 'translateY(0rem)',
    display: 'block',
  },
  '50%': {
    opacity: '0.2',
    transform: 'translateY(-2rem)',
    display: 'block',
  },
  '100%': {
    opacity: '0',
    transform: 'translateY(-2rem)',
    display: 'none',
  },
});

const twoWeekFadeIn = keyframes({
  '0%': {
    transform: 'translateY(0rem)',
  },
  '100%': {
    transform: 'translateY(-4rem)',
  },
});

const threeWeekFadeIn = keyframes({
  '0%': {
    transform: 'translateY(0rem)',
  },
  '100%': {
    transform: 'translateY(-8rem)',
  },
});

const fourWeekFadeIn = keyframes({
  '0%': {
    transform: 'translateY(0rem)',
  },
  '100%': {
    transform: 'translateY(-12.5rem)',
  },
});

const fiveWeekFadeIn = keyframes({
  '0%': {
    transform: 'translateY(0rem)',
  },
  '100%': {
    transform: 'translateY(-15.5rem)',
  },
});

const fadeIn = keyframes({
  '0%': {
    opacity: '0',
    transform: 'translateY(-2rem)',
  },
  '100%': {
    opacity: '1',
    transform: 'translateY(0rem)',
  },
});

export const container = style({
  overflow: 'hidden',
  position: 'relative',
});

export const buttonWrapper = style({
  position: 'absolute',
  right: 20,
  height: '3.6rem',
});

export const calendar = style({
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

globalStyle(`${calendar} *`, {
  textDecoration: 'none !important',
});

globalStyle(`${calendar} abbr`, {
  position: 'relative',
});

globalStyle(`${calendar} .react-calendar__navigation`, {
  height: '3.6rem',
  marginBottom: 0,
  padding: '0 8.4rem 0 8.4rem',
});

globalStyle(`${calendar} .react-calendar__navigation__label__labelText`, {
  display: 'inline-block',
  marginTop: '0.4rem',
});

globalStyle(`${calendar} .react-calendar__navigation__arrow`, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

globalStyle(`${calendar} .react-calendar__navigation button:focus`, {
  backgroundColor: '#fff',
});

globalStyle(`${calendar} .react-calendar__navigation button:hover`, {
  backgroundColor: 'transparent',
});

globalStyle(`${calendar} .react-calendar__navigation button:disabled`, {
  color: '#000',
  letterSpacing: '-0.2px',
  fontSize: '1.6rem',
  fontWeight: 700,
  lineHeight: '2.4rem',
  backgroundColor: '#fff',
});

globalStyle(`${calendar} .react-calendar__navigation button:disabled`, {
  color: '#000',
  letterSpacing: '-0.2px',
  fontSize: '1.6rem',
  fontWeight: 700,
  lineHeight: '2.4rem',
  backgroundColor: '#fff',
});

globalStyle(`${calendar} .react-calendar__month-view`, {
  padding: '0.4rem 2.8rem',
});

globalStyle(`${calendar} .react-calendar__month-view__weekdays`, {
  fontSize: '1.2rem',
  fontWeight: 400,
  color: '#888888',
});

globalStyle(`${calendar} .react-calendar__month-view__days__day`, {
  height: '4.2rem',
  fontSize: '1.4rem',
  fontWeight: 700,
});

globalStyle(`${calendar} .react-calendar__tile:disabled`, {
  display: 'none',
  animation: `${fadeOut} ease-in-out`,
  animationDuration: '0.2s',
});

globalStyle(`${calendar} .weekmode__2`, {
  animation: `${twoWeekFadeIn} ease-in-out`,
  animationDuration: '0.2s',
  MozAnimationDelay: '0.4s',
});

globalStyle(`${calendar} .weekmode__3`, {
  animation: `${threeWeekFadeIn} ease-in-out`,
  animationDuration: '0.2s',
  MozAnimationDelay: '0.4s',
});

globalStyle(`${calendar} .weekmode__4`, {
  animation: `${fourWeekFadeIn} ease-in-out`,
  animationDuration: '0.2s',
  MozAnimationDelay: '0.4s',
});

globalStyle(`${calendar} .weekmode__5`, {
  animation: `${fiveWeekFadeIn} ease-in-out`,
  animationDuration: '0.2s',
  MozAnimationDelay: '0.4s',
});

globalStyle(`${calendar} .monthmode`, {
  animation: `${fadeIn} ease-in-out`,
  animationDuration: '0.2s',
  MozAnimationDelay: '0.4s',
});

globalStyle(`${calendar} .react-calendar__month-view__days__day--weekend`, {
  color: '#FF5757',
});

globalStyle(`${calendar} .react-calendar__tile`, {
  position: 'relative',
  backgroundColor: '#fff',
});

globalStyle(`${calendar} .react-calendar__tile--active`, {
  color: '#000',
});

globalStyle(`${calendar} .react-calendar__tile::before`, {
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

globalStyle(`${calendar} .react-calendar__tile--now`, {
  position: 'relative',
  color: '#287CFF !important',
  backgroundColor: '#fff',
});

globalStyle(`${calendar} .react-calendar__tile:enabled:hover`, {
  color: '#fff',
  backgroundColor: 'transparent',
});

globalStyle(`${calendar} .react-calendar__tile:enabled:focus`, {
  color: '#fff',
  backgroundColor: 'transparent',
});

globalStyle(`${calendar} .react-calendar__tile:enabled:hover::before`, {
  background: '#D6DDE4',
});

globalStyle(`${calendar} .react-calendar__tile--active:enabled:focus`, {
  color: '#fff',
  background: 'transparent',
});

globalStyle(`${calendar} .react-calendar__tile:enabled:focus::before`, {
  background: '#D6DDE4',
});

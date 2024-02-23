import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  height: 'calc(100% - 64px)',
  padding: '0 1.6rem',
  backgroundColor: colors.gray000,
});

export const topWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const inputWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const contactInput = style({
  height: '4.8rem !important',
});

export const contactWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  marginTop: '2.4rem',
});

export const contactCard = style({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
});

export const selectedContactCard = style([
  contactCard,
  {
    justifyContent: 'space-between',
  },
]);

export const contactCardInfo = style({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '1.2rem',
});

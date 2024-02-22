import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2.4rem 1.6rem 3.2rem',
});

export const profileWrapper = style({
  position: 'relative',
  width: '8rem',
  height: '8rem',
});

export const cameraIcon = style({
  position: 'absolute',
  bottom: -5,
  right: -5,
  width: '3rem',
  height: '3rem',
  backgroundColor: colors.gray000,
  borderRadius: '50%',
  boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.12)',
});

export const formContainer = style({
  width: '100%',
  marginTop: '2.4rem',
});

export const categoryItem = style({
  padding: '0.8rem 1.2rem !important',
  height: '4rem !important',
  borderRadius: '0.8rem !important',
  border: 'none !important',
});

export const noteInput = style({
  height: '23.2rem !important',
});

export const interestContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const interestTitle = style({
  marginBottom: '0.4rem',
});

export const interestSettingButton = style({
  height: '5.2rem',
  padding: '1.4rem 2rem',
  borderRadius: '0.8rem',
  color: colors.gray900,
  backgroundColor: colors.gray000,
});

export const interestSettingText = style({
  display: 'inline-flex',
  justifyContent: 'center',
  gap: 4,
  lineHeight: '2.4rem !important',
});

export const interestTagWrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.8rem',
});

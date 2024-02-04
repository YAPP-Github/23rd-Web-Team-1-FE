import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const invitationContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  paddingTop: '1.2rem',
  paddingBottom: '1.2rem',
});

export const invitationWrapper = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const invitaionProfileWrppaer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '1.2rem',
  alignItems: 'center',
});
export const invitaionProfileImgWrppaer = style({
  borderRadius: '1rem',
  overflow: 'hidden',
  border: `1px solid rgba(0, 0, 0, 0.04)`,
});

export const invitaionDivider = style({
  width: '100%',
  height: '0.1rem',
  background: colors.gray100,
});

import { colors } from '@linker/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const scheduleWrapper = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});
export const scheduleHeaderWrapper = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  paddingLeft: '1.6rem',
  paddingRight: '1.6rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  height: 'auto',
  backgroundColor: `${colors.white}`,
});
export const scheduleHeaderIconWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '1.2rem',
});

export const scheduleTitleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '1.2rem',
  gap: '0.6rem',
  width: '100%',
  height: 'auto',
  paddingLeft: '2rem',
  paddingRight: '1.6rem',
  backgroundColor: colors.white,
  paddingBottom: '2rem',
  marginBottom: '1.6rem',
});
export const scheduleTitleWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.8rem',
  alignItems: 'flex-start',
});
export const scheduleColorDivider = style({
  borderRadius: '0.8rem',
  width: '0.5rem',
  height: '3.2rem',
});
export const scheduleTitleTimeColWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});
export const scheduleTitleTimeWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.4rem',
});
export const scheduleCalendarWrapper = style({
  marginBottom: '1.2rem',
});
export const scheduleCalendarDropDownElipse = style({
  width: '1.2rem',
  height: '1.2rem',
  borderRadius: '50%',
});
export const calendarElipseColor = styleVariants({
  company: { backgroundColor: `${colors.green}` },
  personal: { backgroundColor: `${colors.purple}` },
  birthday: { backgroundColor: `${colors.lightBlue}` },
});
export const scheduleCalendarDropDownWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.8rem',
  alignItems: 'center',
});
export const scheduleInvitationWrapper = style({
  marginBottom: '1.2rem',
});
export const scheduleNoteWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});
export const dropdownDivider = style({
  width: '100%',
  height: '0.1rem',
  background: `${colors.gray200}`,
});
export const dropdownContainer = style({
  width: '16rem',
  border: `1px solid ${colors.gray200}`,
  boxShadow: '0px 0px 6px 0px #0000001A',
  position: 'absolute',
  right: '0.2rem',
  display: 'inline-block',
  borderRadius: '1.6rem',
  background: colors.white,
  zIndex: '10',
  bottom: '-10rem',
});

export const deleteDropdownContainer = style({
  width: '16rem',
  border: `1px solid ${colors.gray200}`,
  boxShadow: '0px 0px 6px 0px #0000001A',
  position: 'absolute',
  right: '0.2rem',
  bottom: '40rem',
  display: 'inline-block',
  borderRadius: '1.6rem',
  background: colors.white,
  zIndex: '10',
});

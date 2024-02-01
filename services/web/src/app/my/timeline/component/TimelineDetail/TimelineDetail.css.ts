import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const timelineDetailWrapper = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});
export const timelineDetailHeaderWrapper = style({
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
export const timelineDetailHeaderIconWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '1.2rem',
});

export const timelineDetailTitleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '1.2rem',
  gap: '0.6rem',
  width: '100%',
  height: 'auto',
  paddingLeft: '2rem',
  paddingRight: '1.6rem',
  backgroundColor: `${colors.white}`,
  paddingBottom: '2rem',
  marginBottom: '1.6rem',
});
export const timelineDetailTitleWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.8rem',
  alignItems: 'flex-start',
});
export const timelineColorDivider = style({
  borderRadius: '0.8rem',
  width: '0.5rem',
  height: '3.2rem',
});
export const timelineDetailTitleTimeWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.4rem',
});
export const timelineDetailCalendarWrapper = style({
  marginBottom: '1.2rem',
});
export const timelineDetailCalendarDropDownElipse = style({
  width: '1.2rem',
  height: '1.2rem',
  borderRadius: '50%',
});
export const timelineDetailCalendarDropDownWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.8rem',
  alignItems: 'center',
});
export const timelineDetailInvitationWrapper = style({
  marginBottom: '1.2rem',
});
export const timelineDetailNoteWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

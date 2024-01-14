import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const timelineItmeInfoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});
export const timelineRowWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '0.4rem',
});

export const timelineItemHashtagWrapper = style({
  marginTop: '2.6rem',
  display: 'flex',
  flexDirection: 'row',
  gap: '0.7rem',
});
export const timelineItemHashtagBoxWrapper = style({
  background: `${colors.gray100}`,
  borderRadius: '0.3rem',
  display: 'inline-block',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2.6rem',
  paddingTop: '0.3rem',
  paddingRight: '1.3rem',
  paddingLeft: '1.1rem',
  paddingBottom: '0.5rem',
});

export const timelineItemDivider = style({
  marginTop: '1.2rem',
  width: '100%',
  height: '0.1rem',
  background: `${colors.gray100}`,
});

export const timelineItemMemoWrapper = style({
  marginTop: '1.4rem',
  display: 'flex',
  flexDirection: 'column',
});

export const timelineItemSubjectWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `0.1rem solid ${colors.gray200}`,
  borderRadius: '0.8rem',
  marginTop: '1.7rem',
  height: '4rem',
  paddingTop: '1rem',
  paddingBottom: '1rem',
});

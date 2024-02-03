import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const timelineDetailNoteWrapper = style({
  width: '100%',
  height: '100vh',
  background: colors.white,
  paddingLeft: '1.6rem',
  paddingRight: '1.6rem',
});

export const timelineDetailNoteHeader = style({
  paddingTop: '1rem',
  paddingBottom: '1rem',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const timelineDetailNoteHeaderText = style({
  justifyContent: 'center',
  flex: '1',
  alignItems: 'center',
  textAlign: 'center',
});

export const timelineDetailNoteBody = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

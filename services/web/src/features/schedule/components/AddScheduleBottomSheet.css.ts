import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  backgroundColor: colors.background,
  height: 'calc(100% - 64px)',
});

export const listRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const invitedContactCard = style([
  {
    flexDirection: 'column',
  },
]);

export const scheduleInput = style({
  width: '11.8rem !important',
  height: '3.4rem !important',
  padding: '0.6rem 1.2rem !important',
  backgroundColor: `${colors.gray050} !important`,
});

export const titleInput = style({
  borderRadius: '0 !important',
});

export const contactAddButton = style({
  display: 'inline-flex',
  alignItems: 'center',
});

export const divider = style({
  width: '100%',
  height: 1,
  margin: '1.2rem 0',
  backgroundColor: colors.gray100,
});

export const textareaContainer = style({
  padding: '0 1.6rem',
});

export const textarea = style({
  height: '23.2rem !important',
  padding: '0 1.6rem',
});

export const dropdownTrigger = style({
  display: 'flex',
  alignItems: 'center',
});

export const categoryLegend = style({
  display: 'inline-block',
  width: '1.2rem',
  height: '1.2rem',
  borderRadius: '50%',
});

export const categoryToggleIcon = style({
  display: 'inline-block',
});

export const dropdown = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
});

export const categoryWrapper = style({
  position: 'absolute',
  top: 30,
  right: -10,
  zIndex: 1,
  width: '16rem',
  borderRadius: 8,
  boxShadow: '0px 0px 6px 0px #0000001A',
  backgroundColor: colors.gray000,
});

export const border = style({
  borderBottom: `1px solid ${colors.gray100}`,
});

export const categoryItem = style([
  listRow,
  {
    width: '100%',
    padding: '1.2rem 1.6rem',
  },
]);

export const categoryIdentifier = style({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 2,
  width: '0.5rem',
  height: '2.8rem',
  margin: '1.2rem 0.8rem 1.2rem 0.8rem',
  borderRadius: '0.8rem',
});

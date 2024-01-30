import { colors } from '@linker/styles';
import { style } from '@vanilla-extract/css';

export const kakaoLogin = style({
  width: '100%',
  color: colors.kakaoText,
  backgroundColor: colors.kakao,

  selectors: {
    '&:active': {
      backgroundColor: colors.kakao,
    },
  },
});

export const kakaoLogo = style({
  marginRight: '0.6rem',
});

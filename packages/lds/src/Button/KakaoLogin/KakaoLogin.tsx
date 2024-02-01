import { HTMLAttributes } from 'react';

import { kakaoLogin, kakaoLogo } from './KaKaoLogin.css';
import { Icon } from '../../Icon';
import Button from '../Button';

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'type'> {
  onClick: () => void;
}

const KakaoLogin = ({ onClick, ...props }: Props) => {
  return (
    <Button className={kakaoLogin} onClick={onClick} {...props}>
      <Icon name="kakao" size={28} className={kakaoLogo} />
      카카오로 계속하기
    </Button>
  );
};

export default KakaoLogin;

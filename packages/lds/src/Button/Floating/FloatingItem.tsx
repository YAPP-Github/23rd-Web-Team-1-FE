import { colors } from '@linker/styles';
import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';

import { container } from './FloatingItem.css';
import { Txt } from '../../Txt';

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'type'> {
  text: string;
  rightAddon: ReactNode;
}
// 플로팅 버튼의 두가지 종류 -> 오른쪽이 아이콘, 오른쪽이 원

const FloatingItem = ({ text, rightAddon }: Props) => {
  return (
    <div className={container}>
      <Txt typography="p3" fontWeight="regular" color={colors.gray900}>
        {text}
      </Txt>
      {rightAddon}
    </div>
  );
};

export default FloatingItem;

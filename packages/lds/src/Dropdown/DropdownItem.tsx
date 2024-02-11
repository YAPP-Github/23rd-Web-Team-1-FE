import { colors } from '@linker/styles';
import { ReactNode } from 'react';
import { HTMLAttributes } from 'react';

import { container } from './DropdownItem.css';
import { Txt } from '../Txt';

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'type'> {
  text: string;
  rightAddon: ReactNode;
  onClick: () => void;
}

// 클릭된 상태, 클릭 이벤트 함수 내장하기!
const DropdownItem = ({ text, rightAddon }: Props) => {
  return (
    <div className={container}>
      <Txt typography="p3" fontWeight="regular" color={colors.gray900}>
        {text}
      </Txt>
      {rightAddon}
    </div>
  );
};

export default DropdownItem;

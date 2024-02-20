import { colors } from '@linker/styles';
import { ReactNode } from 'react';

import { Txt, TxtProps } from '../Txt';

interface Props extends TxtProps {
  children: ReactNode;
  className?: string;
  textClassName?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const TextButton = ({
  children,
  className,
  textClassName,
  disabled,
  type = 'button',
  onClick,
  ...props
}: Props) => {
  return (
    <button type={type} className={className} disabled={disabled} onClick={onClick}>
      <Txt
        color={disabled ? colors.gray300 : colors.gray900}
        fontWeight={disabled ? 'medium' : props.fontWeight}
        className={textClassName}
        {...props}
      >
        {children}
      </Txt>
    </button>
  );
};

export default TextButton;

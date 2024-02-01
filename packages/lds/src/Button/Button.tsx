import { typography } from '@linker/styles';
import clsx from 'clsx';
import { HTMLAttributes, ReactNode, forwardRef } from 'react';

import { baseStyle, rightAddonItem } from './Button.css';
import { FAB } from './FAB/';
import { KakaoLogin } from './KakaoLogin';

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium';
  disabled?: boolean;
  loading?: boolean;
  rightAddon?: ReactNode;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({
    variant = 'primary',
    size = 'medium',
    disabled = false,
    loading = false,
    rightAddon,
    className,
    children,
    ...props
  }: Props) => {
    return (
      <button
        type="button"
        className={clsx(baseStyle({ variant, size }), typography({ type: 'b1' }), className)}
        disabled={loading || disabled}
        aria-disabled={loading || disabled}
        {...props}
      >
        {loading ? (
          //TODO: Loading Component로 대체
          <span>Loading...</span>
        ) : (
          rightAddon != null && (
            <span aria-hidden className={rightAddonItem}>
              {rightAddon}
            </span>
          )
        )}
        {children}
      </button>
    );
  },
);

export default Object.assign(Button, { FAB, KakaoLogin });

/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { typography as typographyRecipe } from '@linker/styles';
import { FontWeight, Typography } from '@linker/styles/types';
import clsx from 'clsx';
import { CSSProperties, ReactElement, forwardRef } from 'react';

interface BaseProps {
  typography?: Typography;
  color?: CSSProperties['color'];
  fontWeight?: FontWeight;
}

export type Props<Element extends keyof JSX.IntrinsicElements = 'span'> = BaseProps & {
  as?: Element;
} & Omit<React.AllHTMLAttributes<Element>, 'as'>;

interface TxtProps<T extends keyof JSX.IntrinsicElements = 'span'>
  extends Omit<Props<T>, 'color'>,
    BaseProps {}

const Txt = forwardRef<HTMLElement, TxtProps>(
  (
    { typography = 'p1', as: Component = 'span', children, className, color, ...props }: TxtProps,
    ref,
  ) => {
    return (
      <Component
        ref={ref}
        className={clsx(typographyRecipe({ type: typography }), className)}
        style={{ color, ...props.style }}
        {...(props as any)}
      >
        {children}
      </Component>
    );
  },
) as <T extends keyof JSX.IntrinsicElements = 'span'>(props: Props<T>) => ReactElement | null;

export default Txt;

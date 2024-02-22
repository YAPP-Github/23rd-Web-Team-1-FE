'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { HTMLAttributes, MouseEvent, ReactNode, memo } from 'react';
import { useEffect, useState } from 'react';

import { button, container, buttonText, innerContariner, buttonRotate, dialog } from './FAB.css';
import { DialogBase } from '../../Dialog';
import { Icon } from '../../Icon';
import { Txt } from '../../Txt';
import { FAB_Z_INDEX } from '../../constants';

export type FABType = 'extand' | 'default';

interface BaseProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'type'> {
  children: ReactNode;
  className?: string;
  open?: boolean;
  onOpenChange?: () => void;
}

interface DefaultProps extends BaseProps {
  type: 'default';
}

interface ExtandProps extends BaseProps {
  type: 'extand';
  text: string;
}

type Props = DefaultProps | ExtandProps;

const FAB = ({
  children,
  className,
  type = 'extand',
  onClick,
  open,
  onOpenChange,

  ...props
}: Props) => {
  const { text } = props as ExtandProps;

  const [fabType, setFabType] = useState<FABType>(type);
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (fabType === 'default') {
      return;
    }

    onClick?.(event);
  };

  useEffect(() => {
    if (type === 'default') {
      return;
    }

    const timer = setTimeout(() => {
      setFabType('default');
    }, 10_000);

    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <motion.div
        className={container}
        style={{ zIndex: open ?? isVisible ? `${FAB_Z_INDEX + 1}` : '' }}
        initial={{
          width: type === 'default' ? '8.8rem' : '100%',
        }}
        animate={{
          width: '8.8rem',
        }}
        transition={{ duration: 0.3, delay: 10 }}
        onClick={() => {
          if (fabType === 'extand') {
            return;
          }

          if (typeof onOpenChange === 'function') {
            onOpenChange();

            return;
          }

          setIsVisible((prev) => !prev);
        }}
      >
        <div className={innerContariner}>
          <button
            type="button"
            onClick={handleButtonClick}
            className={clsx(button, className)}
            style={assignInlineVars(buttonRotate, {
              transform: open ?? isVisible ? 'rotate(45deg)' : '',
            })}
            {...props}
          >
            <Icon name="plus-white" size={42} />
            {fabType === 'extand' && (
              <Txt typography="p3" className={buttonText}>
                {text}
              </Txt>
            )}
          </button>
        </div>
      </motion.div>

      <DialogBase
        open={open ?? isVisible}
        onOpenChange={onOpenChange ?? (() => setIsVisible(false))}
        onExited={onOpenChange ?? (() => setIsVisible(false))}
        className={dialog}
      >
        {children}
      </DialogBase>
    </>
  );
};

export default memo(FAB);

'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { HTMLAttributes, ReactNode } from 'react';
import { useEffect, useState } from 'react';

import { button, container, buttonText, innerContariner } from './FAB.css';
import { Txt } from '../../Txt';

type ButtonType = 'extand' | 'default';

interface BaseProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'type'> {
  children: ReactNode;
  className?: string;
}

interface DefaultProps extends BaseProps {
  type: 'default';
}

interface ExtandProps extends BaseProps {
  type: 'extand';
  text: string;
}

type Props = DefaultProps | ExtandProps;

const FAB = ({ children, className, type = 'extand', ...props }: Props) => {
  const { text } = props as ExtandProps;

  const [fabType, setFabType] = useState<ButtonType>(type);

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
    <motion.div
      className={container}
      initial={{
        width: type === 'default' ? '8.8rem' : '100%',
      }}
      animate={{
        width: '8.8rem',
      }}
      transition={{ duration: 0.3, delay: 10 }}
    >
      <div className={innerContariner}>
        <button type="button" className={clsx(button, className)} {...props}>
          {children}
          {fabType === 'extand' && (
            <Txt typography="p3" className={buttonText}>
              {text}
            </Txt>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default FAB;

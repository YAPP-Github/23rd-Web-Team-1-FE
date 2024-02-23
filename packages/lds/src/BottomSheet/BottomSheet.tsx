'use client';

import { colors } from '@linker/styles';
import clsx from 'clsx';
import { ReactNode, useCallback, useState } from 'react';
import { useSpring, a, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import { bottomSheetOverlay, buttonGroupWrapper, content, handler } from './BottomSheet.css';
import { BottomSheetContext, BottomSheetProvider, useBottomSheetContext } from './context';
import { DialogBase } from '../Dialog';

interface Props extends Omit<BottomSheetContext, 'open'> {
  children: ReactNode;
}

const isServer = typeof window === 'undefined';
const HEIGHT = isServer ? 0 : window.innerHeight - 56;

const BottomSheet = ({ children, height = HEIGHT }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [{ y }, x] = useSpring(() => ({ y: height }));

  const handleOpen = ({ canceled = false }) => {
    setIsOpen(true);

    x.start({
      y: 0,
      immediate: false,
      config: canceled
        ? config.wobbly
        : {
            tension: 210,
            friction: 26,
          },
    });
  };

  const handleClose = useCallback(
    (velocity = 0) => {
      x.start({ y: height, immediate: false, config: { ...config.stiff, velocity } });

      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 200);

      return () => clearTimeout(timer);
    },
    [height, x],
  );

  const bind = useDrag(
    ({ last, vxvy: [, vy], movement: [, my], cancel, canceled }) => {
      if (my < -70) cancel();

      if (last) {
        my > height * 0.5 || vy > 0.5 ? handleClose(vy) : handleOpen({ canceled });
      } else {
        x.start({ y: my, immediate: true });
      }
    },
    { initial: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true },
  );

  const display = y.to((py) => {
    return py < height ? 'block' : 'none';
  });

  return (
    <BottomSheetProvider
      open={isOpen}
      height={height}
      display={display}
      y={y}
      x={x}
      bind={bind}
      onOpenChange={() => handleClose()}
      onExited={() => handleClose()}
      onOpenBottomSheet={() => handleOpen({ canceled: false })}
    >
      {children}
    </BottomSheetProvider>
  );
};

interface ContentProps {
  children: ReactNode;
  className?: string;
  bgColor?: string;
}

const Content = ({ children, className, bgColor = colors.background }: ContentProps) => {
  const {
    open,
    display,
    height = window.innerHeight - 56,
    y,
    bind,
    onOpenChange,
  } = useBottomSheetContext('BottomSheetTrigger');

  return (
    <DialogBase
      open={open}
      onOpenChange={onOpenChange}
      onExited={onOpenChange}
      className={bottomSheetOverlay}
    >
      <a.div
        {...bind?.()}
        style={{ display, y, bottom: `calc(-100vh + ${height}px)`, backgroundColor: bgColor }}
        className={clsx(content, className)}
      >
        <div className={handler} />
        {children}
      </a.div>
    </DialogBase>
  );
};

interface TriggerProps {
  children: ReactNode;
  /** 클릭은 가능하지만 event가 동작하지 않도록 */
  disabled?: boolean;
}

const Trigger = ({ children, disabled = false }: TriggerProps) => {
  const { onOpenBottomSheet } = useBottomSheetContext('BottomSheetTrigger');

  const handleClick = () => {
    if (disabled) {
      return;
    }

    onOpenBottomSheet?.({ canceled: false });
  };

  return (
    <div aria-hidden role="presentation" onClick={handleClick}>
      {children}
    </div>
  );
};

interface CloseButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const CloseButton = ({ children, onClick }: CloseButtonProps) => {
  const { onOpenChange } = useBottomSheetContext('BottomSheetTrigger');

  return (
    <div
      role="presentation"
      onClick={() => {
        onOpenChange?.();
        onClick?.();
      }}
    >
      {children}
    </div>
  );
};

interface ButtonGroupProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const ButtonGroup = ({ className, children }: ButtonGroupProps) => {
  return <div className={clsx(buttonGroupWrapper, className)}>{children}</div>;
};

export default Object.assign(BottomSheet, {
  Content,
  Trigger,
  CloseButton,
  ButtonGroup,
});

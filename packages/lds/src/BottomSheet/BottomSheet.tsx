'use client';

import clsx from 'clsx';
import { ReactNode, useState } from 'react';
import { useSpring, a, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import { content, handler } from './BottomSheet.css';
import { BottomSheetContext, BottomSheetProvider, useBottomSheetContext } from './context';
import { DialogBase } from '../Dialog';

interface Props extends Omit<BottomSheetContext, 'open'> {
  children: ReactNode;
  className?: string;
}

const BottomSheet = ({ className, children, height }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [{ y }, set] = useSpring(() => ({ y: height }));

  const handleOpen = ({ canceled }: { canceled: boolean }) => {
    setIsOpen(true);
    set({ y: 0, immediate: false, config: canceled ? config.wobbly : config.stiff });
  };

  const handleClose = (velocity = 0) => {
    set({ y: height, immediate: false, config: { ...config.stiff, velocity } });

    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const bind = useDrag(
    ({ last, vxvy: [, vy], movement: [, my], cancel, canceled }) => {
      if (my < -70) cancel();

      if (last) {
        my > height * 0.5 || vy > 0.5 ? handleClose(vy) : handleOpen({ canceled });
      } else {
        set({ y: my, immediate: true });
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
}

const Content = ({ children, className }: ContentProps) => {
  const { open, display, height, y, bind, onOpenChange } =
    useBottomSheetContext('BottomSheetTrigger');

  return (
    <DialogBase open={open} onOpenChange={onOpenChange} onExited={onOpenChange}>
      <a.div
        {...bind?.()}
        style={{ display, y, bottom: `calc(-100vh + ${height - 100}px)` }}
        className={clsx(content, className)}
      >
        <div className={handler} />
        {children}
      </a.div>
    </DialogBase>
  );
};

const Trigger = ({ children }: { children: ReactNode }) => {
  const { onOpenBottomSheet } = useBottomSheetContext('BottomSheetTrigger');

  return (
    <button type="button" onClick={onOpenBottomSheet}>
      {children}
    </button>
  );
};

export default Object.assign(BottomSheet, {
  Content,
  Trigger,
});

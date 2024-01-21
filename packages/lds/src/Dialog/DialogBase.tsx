'use client';

import { useBodyScrollLock } from '@linker/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useId } from 'react';
import { createPortal } from 'react-dom';

import { dialogOverlay } from './DialogBase.css';

const baseMotionVariants = {
  open: { opacity: 1, transform: 'translateY(0px)' },
  close: { opacity: 0, transform: 'translateY(20px)' },
};

const baseTransition = {
  duration: 0.2,
  ease: 'easeInOut',
};

type MotionVariants = typeof baseMotionVariants;

export type OverlayTheme = 'dark' | 'transparent';

interface Props {
  children: React.ReactNode;
  className?: string;
  motionVariants?: MotionVariants;
  open: boolean;
  overlayTheme?: OverlayTheme;
  onOpenChange?: () => void;
  onExited?: () => void;
}

const DialogBase = ({
  children,
  className,
  open,
  overlayTheme,
  motionVariants,
  onOpenChange,
  onExited,
}: Props) => {
  const id = useId();

  useBodyScrollLock(open);

  return (
    <>
      {open && (
        <DialogPortal>
          <AnimatePresence onExitComplete={onExited}>
            <DialogOverlay
              key={`dialog-overlay-${id}`}
              open={open}
              onClose={onOpenChange}
              className={dialogOverlay({ overlayTheme })}
            />

            <motion.div
              key={`dialog-content-${id}`}
              initial="close"
              animate={open ? 'open' : 'close'}
              variants={motionVariants ?? baseMotionVariants}
              transition={baseTransition}
              className={className}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </DialogPortal>
      )}
    </>
  );
};

export default DialogBase;

const DialogPortal = ({ children }: { children: React.ReactNode }) => {
  const element = document.getElementById('portal');

  if (element == null) {
    return <></>;
  }

  return createPortal(children, element);
};

const DialogOverlay = ({
  open,
  onClose,
  className,
}: {
  open?: boolean;
  onClose?: () => void;
  className: string;
}) => {
  return (
    <motion.div
      initial="close"
      animate={open ? 'open' : 'close'}
      variants={{
        open: { opacity: 1 },
        closed: { opacity: 0 },
      }}
      transition={{
        duration: 0.1,
        ease: 'linear',
      }}
      onClick={onClose}
      className={className}
    />
  );
};

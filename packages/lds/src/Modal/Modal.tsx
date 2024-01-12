'use client';

import { useState } from 'react';

import { modalContent } from './Modal.css';
import { ModalProvider, useModalContext } from './context';
import { DialogBase } from '../Dialog';
import { OverlayTheme } from '../Dialog/DialogBase';

interface Props {
  children: React.ReactNode;
  open?: boolean;
  overlayTheme?: OverlayTheme;
  onOpenChange?: () => void;
  onExited?: () => void;
}

const Modal = ({ children, open, overlayTheme = 'dark', onOpenChange, onExited }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalProvider
      open={open ?? isOpen}
      overlayTheme={overlayTheme}
      onOpenChange={onOpenChange ?? (() => setIsOpen((prev) => !prev))}
      onExited={onExited ?? (() => setIsOpen(false))}
    >
      {children}
    </ModalProvider>
  );
};

export default Object.assign(Modal, {
  Content: ModalContent,
  Trigger: ModalTrigger,
});

function ModalContent({ children }: Props) {
  const { open, overlayTheme, onOpenChange, onExited } = useModalContext('ModalContent');

  return (
    <DialogBase
      open={open}
      overlayTheme={overlayTheme}
      onOpenChange={onOpenChange}
      onExited={onExited}
      className={modalContent}
    >
      {children}
    </DialogBase>
  );
}

function ModalTrigger({ children }: Props) {
  const { onOpenChange } = useModalContext('ModalTrigger');

  return (
    <button type="button" onClick={onOpenChange}>
      {children}
    </button>
  );
}

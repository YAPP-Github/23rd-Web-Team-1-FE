import { createContext } from '@linker/react';

import { OverlayTheme } from '../Dialog/DialogBase';

interface ModalContext {
  open: boolean;
  overlayTheme?: OverlayTheme;
  onOpenChange?: () => void;
  onExited?: () => void;
}

const context = {
  open: false,
  overlayTheme: undefined,
  onOpenChange: undefined,
  onExited: undefined,
};

export const [ModalProvider, useModalContext] = createContext<ModalContext>('Modal', context);

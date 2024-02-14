import { createContext } from '@linker/react';

interface DropdownContext {
  isOpen: boolean;
  onOpenChange?: () => void;
}

const context = {
  isOpen: false,
  onOpenChange: undefined,
};

export const [DropdownProvider, useDropdownContext] = createContext<DropdownContext>(
  'Dropdown',
  context,
);

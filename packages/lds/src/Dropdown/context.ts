import { createContext } from '@linker/react';

interface DropdownContext {
  dropdownOpen: boolean;
  onOpenChange?: () => void;
}

const context = {
  dropdownOpen: false,
  onOpenChange: undefined,
};

export const [DropdownProvider, useDropdownContext] = createContext<DropdownContext>(
  'Dropdown',
  context,
);

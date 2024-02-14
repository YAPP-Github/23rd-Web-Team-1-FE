/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from '@linker/react';
import { Interpolation, SpringValue } from 'react-spring';
import { ReactEventHandlers } from 'react-use-gesture/dist/types';

import { OverlayTheme } from '../Dialog/DialogBase';

export interface BottomSheetContext {
  open: boolean;
  height: number;
  display?: Interpolation<number, 'block' | 'none'>;
  y?: SpringValue<number>;
  bind?: (...args: any[]) => ReactEventHandlers;
  overlayTheme?: OverlayTheme;
  onOpenChange?: () => void;
  onExited?: () => void;
  onOpenBottomSheet?: () => void;
}

const context = {
  open: false,
  height: 0,
  display: undefined,
  y: undefined,
  bind: undefined,
  overlayTheme: undefined,
  onOpenChange: undefined,
  onOpenBottomSheet: undefined,
};

export const [BottomSheetProvider, useBottomSheetContext] = createContext<BottomSheetContext>(
  'BottomSheet',
  context,
);

'use client';

import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { ReactNode } from 'react';
import { useState } from 'react';

import { dropdownTrigger } from './Dropdown.css';
import DropdownItem from './DropdownItem';
import { DropdownProvider, useDropdownContext } from './context';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  open?: boolean;
  onOpenChange?: () => void;
  children?: ReactNode;
  className?: string;
}

const Dropdown = ({ children, className, open, onOpenChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownProvider
      isOpen={open ?? isOpen}
      onOpenChange={onOpenChange ?? (() => setIsOpen((prev) => !prev))}
    >
      <div className={className}>{children}</div>
    </DropdownProvider>
  );
};

export default Object.assign(Dropdown, {
  Item: DropdownItem,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
});

function DropdownTrigger({ children, className }: Props) {
  const { onOpenChange } = useDropdownContext('Dropdown-Trigger');

  return (
    <button type="button" onClick={onOpenChange} className={clsx(dropdownTrigger, className)}>
      {children}
    </button>
  );
}

function DropdownContent({ children, className }: Props) {
  const { isOpen } = useDropdownContext('Dropdow-Trigger');

  return <>{isOpen && <ul className={className}> {children}</ul>}</>;
}

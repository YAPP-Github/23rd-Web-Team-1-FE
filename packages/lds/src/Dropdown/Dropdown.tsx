'use client';

import { HTMLAttributes } from 'react';
import { ReactNode } from 'react';
import { useState } from 'react';

import { dropdownTrigger } from './Dropdown.css';
import DropdownItem from './DropdownItem';
import { DropdownProvider, useDropdownContext } from './context';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

const Dropdown = ({ children, className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownProvider isOpen={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
      <button className={className}>{children}</button>
    </DropdownProvider>
  );
};

export default Object.assign(Dropdown, {
  Item: DropdownItem,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
});

function DropdownTrigger({ children }: Props) {
  const { onOpenChange } = useDropdownContext('Dropdown-Trigger');

  return (
    <button type="button" onClick={onOpenChange} className={dropdownTrigger}>
      {children}
    </button>
  );
}

function DropdownContent({ children, className }: Props) {
  const { isOpen } = useDropdownContext('Dropdow-Trigger');

  return <>{isOpen && <button className={className}> {children}</button>}</>;
}

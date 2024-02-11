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
    <DropdownProvider dropdownOpen={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
      <div className={className}>{children}</div>
    </DropdownProvider>
  );
};

export default Object.assign(Dropdown, { Item: DropdownItem, Trigger: DropdownTrigger });

function DropdownTrigger({ children }: Props) {
  const { onOpenChange } = useDropdownContext('DropdownTrigger');

  return (
    <button type="button" onClick={onOpenChange} className={dropdownTrigger}>
      {children}
    </button>
  );
}

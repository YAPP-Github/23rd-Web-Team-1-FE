'use client';

import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { searchInputContainer, searchInput } from './SearchInput.css';

interface Props extends HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  className?: string;
  placeholder: string;
}

const SearchInput = ({ children, className, placeholder }: Props) => {
  const { register } = useForm();
  const inputRef = useRef<HTMLInputElement>(null); // useRef with null as initial value
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <section className={searchInputContainer}>
      {!isFocused && (
        <Image
          src="https://static.im-linker.com/dots-vertical.svg"
          width={24}
          height={24}
          alt={'검색아이콘'}
        />
      )}
      <input
        {...(register('search'), { required: true })}
        type="text"
        className={searchInput}
        placeholder={placeholder}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </section>
  );
};

export default SearchInput;

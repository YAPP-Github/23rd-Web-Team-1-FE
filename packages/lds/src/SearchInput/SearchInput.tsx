'use client';

import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';

import { searchInputContainer, searchInput } from './SearchInput.css';

interface Props extends HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  className?: string;
  placeholder: string;
}

const SearchInput = ({ children, className, placeholder }: Props) => {
  const { register, control, handleSubmit } = useForm();
  const inputRef = useRef<HTMLInputElement>(null); // useRef with null as initial value
  const [isFocused, setIsFocused] = useState(false);
  const watchQuery = useWatch({
    name: 'search',
    control,
  });

  /*eslint-disable no-console*/
  console.log(watchQuery);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const onSubmit = () => {};

  return (
    <form className={searchInputContainer} onSubmit={handleSubmit(onSubmit)}>
      {!isFocused && (
        <Image
          src="https://static.im-linker.com/dots-vertical.svg"
          width={24}
          height={24}
          alt={'검색아이콘'}
        />
      )}
      <Controller
        control={control}
        name="search"
        render={({ field }) => (
          <input
            {...register('search')}
            type="text"
            className={searchInput}
            placeholder={placeholder}
            ref={inputRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={(e) => field.onChange(e.target.value)}
          />
        )}
      />
    </form>
  );
};

export default SearchInput;

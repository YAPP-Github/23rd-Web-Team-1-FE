'use client';

import { typography } from '@linker/styles';
import clsx from 'clsx';
import Image from 'next/image';
import { HTMLAttributes, useEffect, useRef } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

import { searchInputContainer, searchInput } from './SearchInput.css';

interface Props extends HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  className?: string;
  placeholder: string;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ children, className, placeholder, setQuery, query }: Props) => {
  const { register, control } = useForm();
  const watchQuery = useWatch({
    name: 'search',
    control,
  });
  const [value] = useDebounce(watchQuery, 1000);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setQuery(value);
  }, [watchQuery]);

  return (
    <nav className={searchInputContainer}>
      <Image
        src="https://static.im-linker.com/search.svg"
        width={24}
        height={24}
        alt={'검색아이콘'}
      />

      <Controller
        control={control}
        name="search"
        render={({ field }) => (
          <input
            {...register('search')}
            type="text"
            className={clsx(searchInput, typography({ type: 'p2' }))}
            placeholder={placeholder}
            ref={inputRef}
            onChange={(e) => field.onChange(e.target.value)}
          />
        )}
      />
    </nav>
  );
};

export default SearchInput;

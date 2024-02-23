'use client';

import { typography } from '@linker/styles';
import clsx from 'clsx';
import { HTMLAttributes, useEffect, useRef } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

import { searchInputContainer, searchInput, searchInputWrapper } from './SearchInput.css';
import { Icon } from '../Icon';

interface Props extends HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  className?: string;
  placeholder: string;
  query?: string;
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
  isFoucsed?: boolean;
  setIsFocused?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchInput = ({
  children,
  className,
  placeholder,
  query,
  setQuery,
  isFoucsed,
  setIsFocused,
}: Props) => {
  const { register, control, reset } = useForm();

  const watchQuery = useWatch({
    name: 'search',
    control,
  });
  const [value] = useDebounce(watchQuery, 50);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (setQuery) {
      setQuery(value);
    }
  }, [setQuery, value]);

  return (
    <button className={searchInputContainer}>
      <Icon name="search" size={24} />

      <Controller
        control={control}
        name="search"
        render={({ field }) => (
          <div className={searchInputWrapper}>
            <input
              {...register('search')}
              type="text"
              className={clsx(searchInput, typography({ type: 'p2' }))}
              placeholder={placeholder}
              ref={inputRef}
              onChange={(e) => {
                field.onChange(e.target.value);
              }}
              onFocus={() => (setIsFocused ? setIsFocused(true) : () => {})}
              onBlur={() => (setIsFocused ? setIsFocused(false) : () => {})}
              value={watchQuery}
            />
            {query != null && (
              <button
                onClick={() => {
                  reset({ search: '' });
                }}
              >
                <Icon name="close-gray" size={16} />
              </button>
            )}
          </div>
        )}
      />
    </button>
  );
};

export default SearchInput;

import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';

import { searchInputContainer, searchInput } from './SearchInput.css';

interface Props extends HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  className?: string;
  placeholder: string;
}

const SearchInput = ({ children, className, placeholder }: Props) => {
  const { register } = useForm();

  return (
    <section className={searchInputContainer}>
      <Image
        src="https://static.im-linker.com/dots-vertical.svg"
        width={24}
        height={24}
        alt={'검색아이콘'}
      />
      <input
        {...(register('search'), { required: true })}
        type="text"
        className={searchInput}
        placeholder={placeholder}
      />
    </section>
  );
};

export default SearchInput;

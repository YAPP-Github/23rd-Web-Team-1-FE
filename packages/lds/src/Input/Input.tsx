import { colors } from '@linker/styles/src/colors.css';
import clsx from 'clsx';
import { InputHTMLAttributes, forwardRef } from 'react';

import { errorText, formContainer, inputContainer, labelContainer, resetButton } from './Input.css';
import { Icon } from '../Icon';
import { Txt } from '../Txt';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  label?: string;
  className?: string;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, className, errorMessage, value, ...props }, ref) => {
    return (
      <div className={formContainer}>
        {label != null && (
          <label htmlFor={label} className={labelContainer}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={clsx(inputContainer, className)}
          aria-invalid={Boolean(errorMessage)}
          {...props}
        />
        {errorMessage != null && (
          <Txt typography="p3" fontWeight="regular" color={colors.red500} className={errorText}>
            {errorMessage}
          </Txt>
        )}

        {value && (
          <button type="reset" className={resetButton}>
            <Icon name="close-gray" size={16} />
          </button>
        )}
      </div>
    );
  },
);

export default Input;

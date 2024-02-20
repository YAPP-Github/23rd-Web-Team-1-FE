import { colors } from '@linker/styles/src/colors.css';
import clsx from 'clsx';
import { InputHTMLAttributes, forwardRef } from 'react';

import { errorText, formContainer, textareaContainer, labelContainer } from './TextArea.css';
import { Txt } from '../Txt';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  label?: string;
  className?: string;
  errorMessage?: string;
}

const Input = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, className, errorMessage, value, ...props }, ref) => {
    return (
      <div className={formContainer}>
        {label != null && (
          <label htmlFor={label} className={labelContainer}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={clsx(textareaContainer, className)}
          aria-invalid={Boolean(errorMessage)}
          maxLength={400}
          {...props}
        />
        {errorMessage != null && (
          <Txt typography="p3" fontWeight="regular" color={colors.red500} className={errorText}>
            {errorMessage}
          </Txt>
        )}
      </div>
    );
  },
);

export default Input;

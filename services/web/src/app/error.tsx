'use client';

import { ErrorPage } from '@features/error';
import { HTTPError } from 'ky';
import { useRouter } from 'next/router';

interface Props {
  reset: () => void;
  error: HTTPError;
}

const ErrorHandlePage = ({ reset, error }: Props) => {
  const router = useRouter();

  return (
    <ErrorPage
      error={error}
      onClick={() => {
        reset();
        router.back();
      }}
    />
  );
};

export default ErrorHandlePage;

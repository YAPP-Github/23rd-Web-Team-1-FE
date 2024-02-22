'use client';

import { ErrorPage } from '@features/error';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();

  return <ErrorPage onClick={() => router.push('/')} />;
};

export default NotFoundPage;

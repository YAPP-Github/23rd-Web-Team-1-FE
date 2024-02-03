import { renderHook } from '@testing-library/react';

import useIsClient from './useIsClient';

describe('usIsClient', () => {
  test('hydration 이후에는 true를 반환한다.', () => {
    const { result } = renderHook(() => useIsClient(), { hydrate: true });

    expect(result.current).toBe(true);
  });
});

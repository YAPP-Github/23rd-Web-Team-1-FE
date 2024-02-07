import { fireEvent } from '@testing-library/dom';
import { renderHook } from '@testing-library/react-hooks';

import useIsScrolling from './useIsScrolling';

describe('useIsScrolling', () => {
  test('스크롤을 하면 true를 반환한다.', () => {
    const { result } = renderHook(() => useIsScrolling());

    fireEvent.scroll(window, { target: { scrollY: 100 } });

    expect(result.current).toBe(true);
  });

  test('스크롤 위치가 인수값을 넘지 않으면 false를 반환한다.', () => {
    const { result } = renderHook(() => useIsScrolling(50));

    fireEvent.scroll(window, { target: { scrollY: 37 } });

    expect(result.current).toBe(false);
  });

  test('스크롤 위치가 인수값을 넘으면 true를 반환한다.', () => {
    const { result } = renderHook(() => useIsScrolling(50));

    fireEvent.scroll(window, { target: { scrollY: 328 } });

    expect(result.current).toBe(true);
  });
});

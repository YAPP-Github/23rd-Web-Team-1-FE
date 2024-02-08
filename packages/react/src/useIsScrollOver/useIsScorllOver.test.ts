import { fireEvent } from '@testing-library/dom';
import { renderHook } from '@testing-library/react-hooks';

import useIsScrollOver from './useIsScrollOver';

describe('useIsScrollOver', () => {
  test('스크롤을 하면 true를 반환한다.', () => {
    const { result } = renderHook(() => useIsScrollOver());

    fireEvent.scroll(window, { target: { scrollY: 100 } });

    expect(result.current).toBe(true);
  });

  test('스크롤 위치가 인수값을 넘지 않으면 false를 반환한다.', () => {
    const { result } = renderHook(() => useIsScrollOver(50));

    fireEvent.scroll(window, { target: { scrollY: 37 } });

    expect(result.current).toBe(false);
  });

  test('스크롤 위치가 인수값을 넘으면 true를 반환한다.', () => {
    const { result } = renderHook(() => useIsScrollOver(50));

    fireEvent.scroll(window, { target: { scrollY: 328 } });

    expect(result.current).toBe(true);
  });

  test('true를 반환한 이후에 인수값보다 스크롤 위치가 작아지지 않으면 호출하지 않는다.', () => {
    const { result } = renderHook(() => useIsScrollOver(50));

    expect(result.current).toBe(true);
  });
});

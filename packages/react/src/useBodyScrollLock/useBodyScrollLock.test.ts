import { renderHook } from '@testing-library/react-hooks';

import useBodyScrollLock from './useBodyScrollLock';

describe('useBodyScrollLock', () => {
  it('마운트되면 스크롤 막히고 언마운트되면 풀린다.', () => {
    const { unmount } = renderHook(() => useBodyScrollLock());

    expect(document.body.style.overflow).toBe('hidden');

    unmount();

    expect(document.body.style.overflow).not.toBe('hidden');
  });

  it('여러번 마운트 될 경우 unmount될 때 까지 hidden을 유지한다.', () => {
    const { unmount } = renderHook(() => useBodyScrollLock());

    const { unmount: unmount2 } = renderHook(() => useBodyScrollLock());

    const { unmount: unmount3 } = renderHook(() => useBodyScrollLock());

    expect(document.body.style.overflow).toBe('hidden');

    unmount2();

    expect(document.body.style.overflow).toBe('hidden');

    unmount3();

    expect(document.body.style.overflow).toBe('hidden');

    unmount();

    expect(document.body.style.overflow).not.toBe('hidden');
  });
});

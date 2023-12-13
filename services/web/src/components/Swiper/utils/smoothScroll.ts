interface TSmoothScrollArgs {
  duration?: number;
  start: number;
  end: number;
  onScrolling: (offset: number) => void;
  onScrollEnd?: () => void;
}

function easeOutExpo(t: number, b: number, c: number, d: number): number {
  return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
}

export function smoothScroll({
  duration = 1000,
  start,
  end,
  onScrolling,
  onScrollEnd,
}: TSmoothScrollArgs) {
  let timeStart: number;
  const offset = end - start;

  const loop = (timeStamp: number) => {
    if (timeStart === undefined) {
      timeStart = timeStamp;
    }

    const timeElapsed = timeStamp - timeStart;
    const currentPosition = easeOutExpo(timeElapsed, start, offset, duration);

    onScrolling(currentPosition);

    if (timeElapsed < duration) {
      window.requestAnimationFrame(loop);
    } else {
      onScrolling(end);
      onScrollEnd?.();
    }
  };

  window.requestAnimationFrame(loop);
}

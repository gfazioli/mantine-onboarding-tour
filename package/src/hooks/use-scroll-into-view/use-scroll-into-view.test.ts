import { act, renderHook } from '@testing-library/react';
import { useScrollIntoView } from './use-scroll-into-view';

// Mirrors the regression tests of Mantine's own hook (mantinedev/mantine#9338): this fork
// shares its animation loop, so a frame landing past `duration` must still end on the target.

const FRAME = 16;
const PARENT_HEIGHT = 300;
const TARGET_OFFSET = 1000;

function setup(options: { duration: number; easing?: (t: number) => number }) {
  const parent = document.createElement('div');
  const target = document.createElement('div');
  parent.getBoundingClientRect = () => ({ top: 0, height: PARENT_HEIGHT }) as DOMRect;
  target.getBoundingClientRect = () =>
    ({ top: TARGET_OFFSET - parent.scrollTop, height: 0 }) as DOMRect;

  const onScrollFinish = jest.fn();
  const scrollableRef = { current: parent };
  const hook = renderHook(() =>
    useScrollIntoView<HTMLDivElement, HTMLDivElement>({ ...options, onScrollFinish, scrollableRef })
  );
  hook.result.current.targetRef.current = target;

  const advance = (ms: number) => act(() => jest.advanceTimersByTime(ms));

  return { parent, hook, onScrollFinish, advance };
}

describe('useScrollIntoView (OnboardingTour fork)', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it.each([1, 25])('reaches the target when a frame exceeds the %s ms duration', (duration) => {
    const { parent, hook, onScrollFinish, advance } = setup({ duration });

    act(() => hook.result.current.scrollIntoView());
    advance(duration + 2 * FRAME);

    expect(parent.scrollTop).toBe(TARGET_OFFSET);
    expect(onScrollFinish).toHaveBeenCalledTimes(1);
  });

  it('keeps custom easing progress between zero and one', () => {
    const easing = jest.fn((t: number) => t);
    const { parent, hook, advance } = setup({ duration: 25, easing });

    act(() => hook.result.current.scrollIntoView());
    advance(25 + 2 * FRAME);

    expect(easing).toHaveBeenLastCalledWith(1);
    expect(easing.mock.calls.every(([t]) => t >= 0 && t <= 1)).toBe(true);
    expect(parent.scrollTop).toBe(TARGET_OFFSET);
  });

  it('reaches the target immediately with zero duration', () => {
    const { parent, hook, onScrollFinish } = setup({ duration: 0 });

    act(() => hook.result.current.scrollIntoView());

    expect(parent.scrollTop).toBe(TARGET_OFFSET);
    expect(onScrollFinish).toHaveBeenCalledTimes(1);
  });
});

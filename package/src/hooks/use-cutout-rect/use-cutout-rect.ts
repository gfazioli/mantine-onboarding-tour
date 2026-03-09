import { useCallback, useEffect, useState } from 'react';

export interface CutoutRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CutoutState {
  rect: CutoutRect;
  vw: number;
  vh: number;
}

/** Build an SVG path string with an evenodd hole for the cutout overlay.
 *  The outer rect covers the full viewport; the inner rounded rect defines the hole region when rendered with fill-rule="evenodd". */
export function buildCutoutPath(
  vw: number,
  vh: number,
  rect: CutoutRect,
  padding: number,
  radius: number
): string {
  const x = rect.x - padding;
  const y = rect.y - padding;
  const w = rect.width + padding * 2;
  const h = rect.height + padding * 2;
  const r = Math.min(radius, w / 2, h / 2);

  return [
    `M0,0 H${vw} V${vh} H0 Z`,
    `M${x + r},${y}`,
    `H${x + w - r}`,
    `Q${x + w},${y} ${x + w},${y + r}`,
    `V${y + h - r}`,
    `Q${x + w},${y + h} ${x + w - r},${y + h}`,
    `H${x + r}`,
    `Q${x},${y + h} ${x},${y + h - r}`,
    `V${y + r}`,
    `Q${x},${y} ${x + r},${y}`,
    `Z`,
  ].join(' ');
}

/** Track the bounding rect of the focused tour element and viewport size via DOM query + polling/events. */
export function useCutoutRect(active: boolean, stepId: string | undefined): CutoutState | null {
  const [state, setState] = useState<CutoutState | null>(null);

  const measure = useCallback(() => {
    const el = document.querySelector('[data-onboarding-tour-focus-reveal-focused]');
    if (el) {
      const r = el.getBoundingClientRect();
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      setState((prev) => {
        if (
          prev &&
          prev.rect.x === r.x &&
          prev.rect.y === r.y &&
          prev.rect.width === r.width &&
          prev.rect.height === r.height &&
          prev.vw === vw &&
          prev.vh === vh
        ) {
          return prev;
        }
        return { rect: { x: r.x, y: r.y, width: r.width, height: r.height }, vw, vh };
      });
    } else {
      setState(null);
    }
  }, []);

  useEffect(() => {
    if (!active) {
      setState(null);
      return undefined;
    }

    let rafId = 0;
    const onUpdate = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(measure);
    };

    // Poll briefly for the element to appear (FocusReveal sets realFocused async)
    const poll = setInterval(onUpdate, 50);
    const stopPoll = setTimeout(() => clearInterval(poll), 1500);

    window.addEventListener('scroll', onUpdate, true);
    window.addEventListener('resize', onUpdate);

    // Measure immediately so the cutout is applied on the first frame
    onUpdate();

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(poll);
      clearTimeout(stopPoll);
      window.removeEventListener('scroll', onUpdate, true);
      window.removeEventListener('resize', onUpdate);
    };
  }, [active, stepId, measure]);

  return state;
}

import { useCallback, useEffect, useState } from 'react';

export interface CutoutRect {
  x: number;
  y: number;
  width: number;
  height: number;
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

/** Track the bounding rect of the focused tour element via DOM query + polling/events. */
export function useCutoutRect(active: boolean, stepId: string | undefined): CutoutRect | null {
  const [rect, setRect] = useState<CutoutRect | null>(null);

  const measure = useCallback(() => {
    const el = document.querySelector('[data-onboarding-tour-focus-reveal-focused]');
    if (el) {
      const r = el.getBoundingClientRect();
      setRect((prev) => {
        if (
          prev &&
          prev.x === r.x &&
          prev.y === r.y &&
          prev.width === r.width &&
          prev.height === r.height
        ) {
          return prev;
        }
        return { x: r.x, y: r.y, width: r.width, height: r.height };
      });
    } else {
      setRect(null);
    }
  }, []);

  useEffect(() => {
    if (!active) {
      setRect(null);
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

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(poll);
      clearTimeout(stopPoll);
      window.removeEventListener('scroll', onUpdate, true);
      window.removeEventListener('resize', onUpdate);
    };
  }, [active, stepId, measure]);

  return rect;
}

import { render, screen } from '@mantine-tests/core';
import { Button, DirectionProvider, MantineProvider, TextInput, Title } from '@mantine/core';
import { act, fireEvent, renderHook, waitFor } from '@testing-library/react';
import React from 'react';
import { buildCutoutPath } from './hooks/use-cutout-rect/use-cutout-rect';
import {
  OnboardingTourController,
  OnboardingTourStep,
  useOnboardingTour,
} from './hooks/use-onboarding-tour/use-onboarding-tour';
import { OnboardingTour } from './OnboardingTour';
import {
  defaultProps as focusRevealDefaultProps,
  OnboardingTourFocusReveal,
} from './OnboardingTourFocusReveal/OnboardingTourFocusReveal';

const onboardingSteps: OnboardingTourStep[] = [
  {
    id: 'welcome',
    title: 'Welcome to the Onboarding Tour Component',
    content: 'This is a demo of the Onboarding Tour component.',
  },
  {
    id: 'my-button',
    title: 'Features',
    content: 'You can select any component by using the `data-onboarding-tour-id` attribute',
  },
  {
    id: 'third-step',
    title: 'Third step',
    content: 'This is the third step.',
  },
];

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MantineProvider>{children}</MantineProvider>
);

// ─── useOnboardingTour hook tests ───────────────────────────────────────────

describe('useOnboardingTour', () => {
  it('initializes with undefined currentStepIndex', () => {
    const { result } = renderHook(() => useOnboardingTour(onboardingSteps), { wrapper });

    expect(result.current.currentStepIndex).toBeUndefined();
    expect(result.current.currentStep).toBeUndefined();
    expect(result.current.selectedStepId).toBeUndefined();
  });

  it('startTour sets currentStepIndex to 0', () => {
    const { result } = renderHook(() => useOnboardingTour(onboardingSteps), { wrapper });

    act(() => {
      result.current.startTour();
    });

    expect(result.current.currentStepIndex).toBe(0);
    expect(result.current.currentStep).toBe(onboardingSteps[0]);
    expect(result.current.selectedStepId).toBe('welcome');
  });

  it('nextStep advances to the next step', () => {
    const { result } = renderHook(() => useOnboardingTour(onboardingSteps), { wrapper });

    act(() => result.current.startTour());
    act(() => result.current.nextStep());

    expect(result.current.currentStepIndex).toBe(1);
    expect(result.current.selectedStepId).toBe('my-button');
  });

  it('prevStep goes back to the previous step', () => {
    const { result } = renderHook(() => useOnboardingTour(onboardingSteps), { wrapper });

    act(() => result.current.startTour());
    act(() => result.current.nextStep());
    act(() => result.current.prevStep());

    expect(result.current.currentStepIndex).toBe(0);
    expect(result.current.selectedStepId).toBe('welcome');
  });

  it('nextStep on last step ends the tour (no loop)', () => {
    const { result } = renderHook(() => useOnboardingTour(onboardingSteps), { wrapper });

    act(() => result.current.startTour());
    act(() => result.current.nextStep()); // step 1
    act(() => result.current.nextStep()); // step 2
    act(() => result.current.nextStep()); // end

    expect(result.current.currentStepIndex).toBeUndefined();
    expect(result.current.currentStep).toBeUndefined();
  });

  it('prevStep on first step ends the tour (no loop)', () => {
    const { result } = renderHook(() => useOnboardingTour(onboardingSteps), { wrapper });

    act(() => result.current.startTour());
    act(() => result.current.prevStep()); // end

    expect(result.current.currentStepIndex).toBeUndefined();
  });

  it('endTour resets currentStepIndex to undefined', () => {
    const { result } = renderHook(() => useOnboardingTour(onboardingSteps), { wrapper });

    act(() => result.current.startTour());
    act(() => result.current.nextStep());
    act(() => result.current.endTour());

    expect(result.current.currentStepIndex).toBeUndefined();
    expect(result.current.currentStep).toBeUndefined();
  });

  it('loop: nextStep on last step wraps to first', () => {
    const { result } = renderHook(() => useOnboardingTour(onboardingSteps, { loop: true }), {
      wrapper,
    });

    act(() => result.current.startTour());
    act(() => result.current.nextStep()); // 1
    act(() => result.current.nextStep()); // 2
    act(() => result.current.nextStep()); // wraps to 0

    expect(result.current.currentStepIndex).toBe(0);
    expect(result.current.selectedStepId).toBe('welcome');
  });

  it('loop: prevStep on first step wraps to last', () => {
    const { result } = renderHook(() => useOnboardingTour(onboardingSteps, { loop: true }), {
      wrapper,
    });

    act(() => result.current.startTour());
    act(() => result.current.prevStep()); // wraps to last

    expect(result.current.currentStepIndex).toBe(2);
    expect(result.current.selectedStepId).toBe('third-step');
  });

  it('nextStep/prevStep are no-ops when tour is not started', () => {
    const { result } = renderHook(() => useOnboardingTour(onboardingSteps), { wrapper });

    act(() => result.current.nextStep());
    expect(result.current.currentStepIndex).toBeUndefined();

    act(() => result.current.prevStep());
    expect(result.current.currentStepIndex).toBeUndefined();
  });

  it('setCurrentStepIndex jumps to a specific step', () => {
    const { result } = renderHook(() => useOnboardingTour(onboardingSteps), { wrapper });

    act(() => result.current.startTour());
    act(() => result.current.setCurrentStepIndex(2));

    expect(result.current.currentStepIndex).toBe(2);
    expect(result.current.selectedStepId).toBe('third-step');
  });

  // Callback tests

  it('calls onOnboardingTourStart on startTour', () => {
    const onStart = jest.fn();
    const { result } = renderHook(
      () => useOnboardingTour(onboardingSteps, { onOnboardingTourStart: onStart }),
      { wrapper }
    );

    act(() => result.current.startTour());
    expect(onStart).toHaveBeenCalledTimes(1);
  });

  it('calls onOnboardingTourEnd when tour ends', () => {
    const onEnd = jest.fn();
    const { result } = renderHook(
      () => useOnboardingTour(onboardingSteps, { onOnboardingTourEnd: onEnd }),
      { wrapper }
    );

    act(() => result.current.startTour());
    act(() => result.current.endTour());
    expect(onEnd).toHaveBeenCalledTimes(1);
  });

  it('calls onOnboardingTourEnd when nextStep goes past the last step', () => {
    const onEnd = jest.fn();
    const { result } = renderHook(
      () => useOnboardingTour(onboardingSteps, { onOnboardingTourEnd: onEnd }),
      { wrapper }
    );

    act(() => result.current.startTour());
    act(() => result.current.nextStep());
    act(() => result.current.nextStep());
    act(() => result.current.nextStep()); // past last

    expect(onEnd).toHaveBeenCalledTimes(1);
  });

  it('calls onOnboardingTourChange with correct step on navigation', () => {
    const onChange = jest.fn();
    const { result } = renderHook(
      () => useOnboardingTour(onboardingSteps, { onOnboardingTourChange: onChange }),
      { wrapper }
    );

    act(() => result.current.startTour());
    expect(onChange).toHaveBeenCalledWith(onboardingSteps[0]);

    act(() => result.current.nextStep());
    expect(onChange).toHaveBeenCalledWith(onboardingSteps[1]);

    act(() => result.current.prevStep());
    expect(onChange).toHaveBeenCalledWith(onboardingSteps[0]);
  });

  it('calls onOnboardingTourComplete when tour finishes last step', () => {
    const onComplete = jest.fn();
    const onEnd = jest.fn();
    const { result } = renderHook(
      () =>
        useOnboardingTour(onboardingSteps, {
          onOnboardingTourComplete: onComplete,
          onOnboardingTourEnd: onEnd,
        }),
      { wrapper }
    );

    act(() => result.current.startTour());
    act(() => result.current.nextStep());
    act(() => result.current.nextStep());
    act(() => result.current.nextStep()); // past last step

    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(onEnd).toHaveBeenCalledTimes(1);
  });

  it('calls onOnboardingTourSkip when skipTour is called', () => {
    const onSkip = jest.fn();
    const onEnd = jest.fn();
    const onComplete = jest.fn();
    const { result } = renderHook(
      () =>
        useOnboardingTour(onboardingSteps, {
          onOnboardingTourSkip: onSkip,
          onOnboardingTourEnd: onEnd,
          onOnboardingTourComplete: onComplete,
        }),
      { wrapper }
    );

    act(() => result.current.startTour());
    act(() => result.current.nextStep()); // go to step 2
    act(() => result.current.skipTour()); // skip mid-tour

    expect(onSkip).toHaveBeenCalledTimes(1);
    expect(onEnd).toHaveBeenCalledTimes(1);
    expect(onComplete).not.toHaveBeenCalled();
    expect(result.current.currentStepIndex).toBeUndefined();
  });

  it('endTour does not call onComplete or onSkip', () => {
    const onSkip = jest.fn();
    const onComplete = jest.fn();
    const onEnd = jest.fn();
    const { result } = renderHook(
      () =>
        useOnboardingTour(onboardingSteps, {
          onOnboardingTourSkip: onSkip,
          onOnboardingTourComplete: onComplete,
          onOnboardingTourEnd: onEnd,
        }),
      { wrapper }
    );

    act(() => result.current.startTour());
    act(() => result.current.endTour());

    expect(onEnd).toHaveBeenCalledTimes(1);
    expect(onSkip).not.toHaveBeenCalled();
    expect(onComplete).not.toHaveBeenCalled();
  });

  it('calls onOnboardingTourChange in loop mode on wrap-around', () => {
    const onChange = jest.fn();
    const { result } = renderHook(
      () => useOnboardingTour(onboardingSteps, { loop: true, onOnboardingTourChange: onChange }),
      { wrapper }
    );

    act(() => result.current.startTour());
    onChange.mockClear();

    // Go to last step
    act(() => result.current.nextStep());
    act(() => result.current.nextStep());

    // Wrap around to first
    act(() => result.current.nextStep());
    expect(onChange).toHaveBeenLastCalledWith(onboardingSteps[0]);

    // Wrap around backward to last
    act(() => result.current.prevStep());
    expect(onChange).toHaveBeenLastCalledWith(onboardingSteps[2]);
  });
});

// ─── useOnboardingTour generic type tests ───────────────────────────────────

describe('useOnboardingTour generics', () => {
  it('supports custom step properties via generic type', () => {
    type CustomStep = { icon: string; color: string };
    const customSteps: OnboardingTourStep<CustomStep>[] = [
      { id: 'step1', title: 'Step 1', icon: 'home', color: 'blue' },
      { id: 'step2', title: 'Step 2', icon: 'settings', color: 'red' },
    ];

    const { result } = renderHook(() => useOnboardingTour<CustomStep>(customSteps), { wrapper });

    act(() => result.current.startTour());

    expect(result.current.currentStep?.icon).toBe('home');
    expect(result.current.currentStep?.color).toBe('blue');
  });
});

// ─── OnboardingTour component tests ─────────────────────────────────────────

describe('OnboardingTour', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <OnboardingTour tour={onboardingSteps} started>
        <Title data-onboarding-tour-id="welcome" order={4}>
          A simple example of the Onboarding Tour component
        </Title>
        <Button data-onboarding-tour-id="my-button">See all testimonials</Button>
      </OnboardingTour>
    );
    expect(container).toBeTruthy();
  });

  it('renders children when tour is not started', () => {
    render(
      <OnboardingTour tour={onboardingSteps} started={false}>
        <Title data-onboarding-tour-id="welcome" order={4}>
          Welcome Title
        </Title>
      </OnboardingTour>
    );
    expect(screen.getByText('Welcome Title')).toBeInTheDocument();
  });

  it('renders children when tour is started', () => {
    render(
      <OnboardingTour tour={onboardingSteps} started>
        <Title data-onboarding-tour-id="welcome" order={4}>
          Welcome Title
        </Title>
      </OnboardingTour>
    );
    expect(screen.getByText('Welcome Title')).toBeInTheDocument();
  });

  it('has static components attached', () => {
    expect(OnboardingTour.FocusReveal).toBeDefined();
    expect(OnboardingTour.PopoverContent).toBeDefined();
    expect(OnboardingTour.Target).toBeDefined();
  });

  it('has displayName set', () => {
    expect(OnboardingTour.displayName).toBe('OnboardingTour');
  });
});

// ─── FocusReveal component tests ────────────────────────────────────────────

describe('FocusReveal', () => {
  it('renders children', () => {
    render(
      <OnboardingTourFocusReveal>
        <div>Child content</div>
      </OnboardingTourFocusReveal>
    );
    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  it('has displayName set', () => {
    expect(OnboardingTourFocusReveal.displayName).toBe('OnboardingTourFocusReveal');
  });

  it('has Group static component', () => {
    expect(OnboardingTourFocusReveal.Group).toBeDefined();
  });

  it('renders with defaultFocused=false without overlay', () => {
    const { container } = render(
      <OnboardingTourFocusReveal defaultFocused={false}>
        <div>Content</div>
      </OnboardingTourFocusReveal>
    );
    expect(container.querySelector('[data-onboarding-tour-focus-reveal-overlay]')).toBeNull();
  });
});

// ─── Popover dropdown sizing (issue #44) ────────────────────────────────────

describe('Popover dropdown sizing (#44)', () => {
  // The popover only opens once its target is in the viewport; the IntersectionObserver mock in
  // jsdom.mocks.cjs reports elements as visible so the dropdown mounts.
  const findDropdown = () =>
    waitFor(() => {
      const el = document.querySelector('.mantine-Popover-dropdown');
      expect(el).toBeInTheDocument();
      return el as HTMLElement;
    });

  it('applies the default width-cap class to the tour popover dropdown', async () => {
    // The default `max-width: 400px` ships as a CSS class (not inline `styles`) so it survives
    // consumer `styles.dropdown` overrides of other properties. CSS modules are mocked with
    // identity-obj-proxy, so the class token equals its key ('dropdown').
    render(
      <OnboardingTour tour={onboardingSteps} started>
        <Button data-onboarding-tour-id="welcome">Target</Button>
      </OnboardingTour>
    );
    const dropdown = await findDropdown();
    expect(dropdown.classList.contains('dropdown')).toBe(true);
  });

  it('deep-merges tour-level and step-level popoverProps (step does not drop tour settings)', async () => {
    // The step overrides only `position`; the tour-level `styles.dropdown` must survive the merge
    // (a shallow spread would replace the whole popoverProps and lose it).
    const steps: OnboardingTourStep[] = [
      {
        id: 'welcome',
        title: 'Welcome',
        content: 'Content',
        focusRevealProps: { popoverProps: { position: 'top' } },
      },
    ];
    render(
      <OnboardingTour
        tour={steps}
        started
        focusRevealProps={{
          popoverProps: { styles: { dropdown: { backgroundColor: 'rgb(1, 2, 3)' } } },
        }}
      >
        <Button data-onboarding-tour-id="welcome">Target</Button>
      </OnboardingTour>
    );
    const dropdown = await findDropdown();
    expect(dropdown).toHaveStyle({ backgroundColor: 'rgb(1, 2, 3)' });
    // The default cap class is still applied alongside the consumer's styles override.
    expect(dropdown.classList.contains('dropdown')).toBe(true);
  });
});

// ─── Popover positioning defaults (issue #41) ───────────────────────────────

describe('Popover positioning defaults (#41)', () => {
  it('opts out of preventPositionChangeWhenVisible so the popover keeps re-positioning', () => {
    // Mantine 9.3 flipped Popover's `preventPositionChangeWhenVisible` default to `true` (pins the
    // side on open). The tour scrolls targets around, so it must keep flipping/shifting while a step
    // is visible — lock the opt-out here so it can't silently regress across Mantine versions.
    expect(
      (focusRevealDefaultProps.popoverProps as { preventPositionChangeWhenVisible?: boolean })
        ?.preventPositionChangeWhenVisible
    ).toBe(false);
  });
});

// ─── Edge cases ─────────────────────────────────────────────────────────────

describe('Edge cases', () => {
  it('handles empty tour array', () => {
    const onStart = jest.fn();
    const { result } = renderHook(() => useOnboardingTour([], { onOnboardingTourStart: onStart }), {
      wrapper,
    });

    act(() => result.current.startTour());

    expect(result.current.currentStepIndex).toBeUndefined();
    expect(result.current.currentStep).toBeUndefined();
    expect(onStart).not.toHaveBeenCalled();
  });

  it('handles single step tour', () => {
    const singleStep: OnboardingTourStep[] = [{ id: 'only', title: 'Only step' }];
    const onEnd = jest.fn();
    const { result } = renderHook(
      () => useOnboardingTour(singleStep, { onOnboardingTourEnd: onEnd }),
      { wrapper }
    );

    act(() => result.current.startTour());
    expect(result.current.currentStepIndex).toBe(0);

    act(() => result.current.nextStep());
    expect(result.current.currentStepIndex).toBeUndefined();
    expect(onEnd).toHaveBeenCalledTimes(1);
  });

  it('renders OnboardingTour with steps that have no matching children', () => {
    const { container } = render(
      <OnboardingTour tour={onboardingSteps} started>
        <Title order={4}>No matching data-onboarding-tour-id</Title>
      </OnboardingTour>
    );
    expect(container).toBeTruthy();
  });

  it('renders OnboardingTour with nested children', () => {
    const { container } = render(
      <OnboardingTour tour={onboardingSteps} started>
        <div>
          <div>
            <Title data-onboarding-tour-id="welcome" order={4}>
              Nested Title
            </Title>
          </div>
        </div>
      </OnboardingTour>
    );
    expect(container).toBeTruthy();
    expect(screen.getByText('Nested Title')).toBeInTheDocument();
  });
});

// ─── Cutout overlay tests ──────────────────────────────────────────────────

describe('buildCutoutPath', () => {
  it('generates a valid path string with outer and inner rects', () => {
    const path = buildCutoutPath(1024, 768, { x: 100, y: 200, width: 50, height: 30 }, 8, 8);
    expect(path).toContain('M0,0 H1024 V768 H0 Z');
    expect(path).toContain('Q');
    expect(path).toContain('Z');
  });

  it('clamps radius to half the smallest dimension', () => {
    const path = buildCutoutPath(1024, 768, { x: 100, y: 200, width: 10, height: 10 }, 0, 9999);
    // With width=10, height=10, padding=0: r = Math.min(9999, 5, 5) = 5
    // Inner rect starts at M105,200 (x + r = 100 + 5)
    expect(path).toContain('M105,200');
  });

  it('handles zero padding and zero radius', () => {
    const path = buildCutoutPath(800, 600, { x: 50, y: 50, width: 100, height: 100 }, 0, 0);
    expect(path).toContain('M0,0 H800 V600 H0 Z');
    // With r=0, the inner rect is a simple rectangle (Q commands degenerate)
    expect(path).toContain('M50,50');
  });
});

describe('Cutout overlay rendering', () => {
  it('renders overlay element when tour is started', () => {
    const { container } = render(
      <OnboardingTour tour={onboardingSteps} started>
        <Title data-onboarding-tour-id="welcome" order={4}>
          Welcome
        </Title>
      </OnboardingTour>
    );
    const overlay = container.querySelector('[data-onboarding-tour-overlay]');
    expect(overlay).toBeInTheDocument();
  });

  it('does not render overlay when tour is not started', () => {
    const { container } = render(
      <OnboardingTour tour={onboardingSteps} started={false}>
        <Title data-onboarding-tour-id="welcome" order={4}>
          Welcome
        </Title>
      </OnboardingTour>
    );
    const overlay = container.querySelector('[data-onboarding-tour-overlay]');
    expect(overlay).toBeNull();
  });

  it('accepts cutoutPadding and cutoutRadius props without errors', () => {
    const { container } = render(
      <OnboardingTour tour={onboardingSteps} started cutoutPadding={12} cutoutRadius={9999}>
        <Title data-onboarding-tour-id="welcome" order={4}>
          Welcome
        </Title>
      </OnboardingTour>
    );
    expect(container).toBeTruthy();
    const overlay = container.querySelector('[data-onboarding-tour-overlay]');
    expect(overlay).toBeInTheDocument();
  });

  it('accepts per-step cutoutPadding and cutoutRadius', () => {
    const stepsWithCutout: OnboardingTourStep[] = [
      {
        id: 'step1',
        title: 'Step 1',
        cutoutPadding: 4,
        cutoutRadius: 9999,
      },
      {
        id: 'step2',
        title: 'Step 2',
        // inherits tour-level defaults
      },
    ];
    const { container } = render(
      <OnboardingTour tour={stepsWithCutout} started cutoutPadding={16} cutoutRadius={16}>
        <Title data-onboarding-tour-id="step1" order={4}>
          Step 1
        </Title>
        <Button data-onboarding-tour-id="step2">Step 2</Button>
      </OnboardingTour>
    );
    expect(container).toBeTruthy();
  });
});

// ─── Keyboard navigation and accessibility ──────────────────────────────────

describe('Keyboard navigation', () => {
  function renderTour(props: Partial<React.ComponentProps<typeof OnboardingTour>> = {}) {
    const onChange = jest.fn();
    const onSkip = jest.fn();
    const onEnd = jest.fn();
    const onComplete = jest.fn();
    const utils = render(
      <OnboardingTour
        tour={onboardingSteps}
        started
        onOnboardingTourChange={onChange}
        onOnboardingTourSkip={onSkip}
        onOnboardingTourEnd={onEnd}
        onOnboardingTourComplete={onComplete}
        {...props}
      >
        <Button data-onboarding-tour-id="welcome">Welcome</Button>
        <Button data-onboarding-tour-id="my-button">Features</Button>
        <TextInput data-onboarding-tour-id="third-step" aria-label="Third" />
      </OnboardingTour>
    );
    return { ...utils, onChange, onSkip, onEnd, onComplete };
  }

  const lastStepId = (onChange: jest.Mock) => onChange.mock.calls.at(-1)?.[0]?.id;

  it('goes to the next step with ArrowRight and back with ArrowLeft', async () => {
    const { onChange } = renderTour();
    await waitFor(() => expect(lastStepId(onChange)).toBe('welcome'));

    fireEvent.keyDown(window, { key: 'ArrowRight' });
    await waitFor(() => expect(lastStepId(onChange)).toBe('my-button'));

    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    await waitFor(() => expect(lastStepId(onChange)).toBe('welcome'));
  });

  it('does not end the tour with ArrowLeft on the first step', async () => {
    const { onChange, onEnd } = renderTour();
    await waitFor(() => expect(lastStepId(onChange)).toBe('welcome'));

    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    expect(onEnd).not.toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('completes the tour with ArrowRight on the last step', async () => {
    const { onChange, onComplete, onEnd } = renderTour();
    await waitFor(() => expect(lastStepId(onChange)).toBe('welcome'));
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    await waitFor(() => expect(lastStepId(onChange)).toBe('my-button'));
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    await waitFor(() => expect(lastStepId(onChange)).toBe('third-step'));

    fireEvent.keyDown(document.body, { key: 'ArrowRight' });
    await waitFor(() => expect(onComplete).toHaveBeenCalledTimes(1));
    expect(onEnd).toHaveBeenCalledTimes(1);
  });

  it('leaves the arrows to a text field', async () => {
    const { onChange } = renderTour();
    await waitFor(() => expect(lastStepId(onChange)).toBe('welcome'));

    fireEvent.keyDown(screen.getByLabelText('Third'), { key: 'ArrowRight' });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('ignores arrows with a modifier key', async () => {
    const { onChange } = renderTour();
    await waitFor(() => expect(lastStepId(onChange)).toBe('welcome'));

    fireEvent.keyDown(window, { key: 'ArrowRight', shiftKey: true });
    fireEvent.keyDown(window, { key: 'ArrowRight', metaKey: true });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('can be turned off with withKeyboardNavigation={false}', async () => {
    const { onChange } = renderTour({ withKeyboardNavigation: false });
    await waitFor(() => expect(lastStepId(onChange)).toBe('welcome'));

    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('mirrors the arrows in RTL', async () => {
    const onChange = jest.fn();
    render(
      <DirectionProvider initialDirection="rtl">
        <OnboardingTour tour={onboardingSteps} started onOnboardingTourChange={onChange}>
          <Button data-onboarding-tour-id="welcome">Welcome</Button>
          <Button data-onboarding-tour-id="my-button">Features</Button>
        </OnboardingTour>
      </DirectionProvider>
    );
    await waitFor(() => expect(lastStepId(onChange)).toBe('welcome'));

    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(onChange).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    await waitFor(() => expect(lastStepId(onChange)).toBe('my-button'));
  });

  it('skips the tour with Escape', async () => {
    const { onChange, onSkip, onEnd } = renderTour();
    await waitFor(() => expect(lastStepId(onChange)).toBe('welcome'));

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onSkip).toHaveBeenCalledTimes(1);
    expect(onEnd).toHaveBeenCalledTimes(1);
  });

  it('keeps the tour open on Escape with closeOnEscape={false}', async () => {
    const { onChange, onSkip } = renderTour({ closeOnEscape: false });
    await waitFor(() => expect(lastStepId(onChange)).toBe('welcome'));

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onSkip).not.toHaveBeenCalled();
  });

  it('leaves Escape to a control marked with data-mantine-stop-propagation', async () => {
    const { onChange, onSkip } = renderTour();
    await waitFor(() => expect(lastStepId(onChange)).toBe('welcome'));

    const input = screen.getByLabelText('Third');
    input.setAttribute('data-mantine-stop-propagation', 'true');
    fireEvent.keyDown(input, { key: 'Escape' });
    expect(onSkip).not.toHaveBeenCalled();
  });
});

describe('Overlay click', () => {
  it('does not skip the tour by default', async () => {
    const onSkip = jest.fn();
    const { container } = render(
      <OnboardingTour tour={onboardingSteps} started onOnboardingTourSkip={onSkip}>
        <Button data-onboarding-tour-id="welcome">Welcome</Button>
      </OnboardingTour>
    );
    const overlay = await waitFor(() => {
      const el = container.querySelector('[data-onboarding-tour-overlay]');
      expect(el).toBeInTheDocument();
      return el as HTMLElement;
    });
    fireEvent.click(overlay);
    expect(onSkip).not.toHaveBeenCalled();
  });

  it('skips the tour with closeOnOverlayClick', async () => {
    const onSkip = jest.fn();
    const { container } = render(
      <OnboardingTour
        tour={onboardingSteps}
        started
        closeOnOverlayClick
        onOnboardingTourSkip={onSkip}
      >
        <Button data-onboarding-tour-id="welcome">Welcome</Button>
      </OnboardingTour>
    );
    const overlay = await waitFor(() => {
      const el = container.querySelector('[data-onboarding-tour-overlay]');
      expect(el).toBeInTheDocument();
      return el as HTMLElement;
    });
    fireEvent.click(overlay);
    expect(onSkip).toHaveBeenCalledTimes(1);
  });
});

describe('Step popover accessibility', () => {
  const findDialog = () =>
    waitFor(() => {
      const el = document.querySelector('.mantine-Popover-dropdown');
      expect(el).toBeInTheDocument();
      return el as HTMLElement;
    });

  it('is a dialog named by the step title and described by the step content', async () => {
    render(
      <OnboardingTour tour={onboardingSteps} started>
        <Button data-onboarding-tour-id="welcome">Target</Button>
      </OnboardingTour>
    );
    const dialog = await findDialog();
    expect(dialog).toHaveAttribute('role', 'dialog');

    const title = document.getElementById(dialog.getAttribute('aria-labelledby')!);
    const content = document.getElementById(dialog.getAttribute('aria-describedby')!);
    expect(title).toHaveTextContent(onboardingSteps[0].title as string);
    expect(content).toHaveTextContent(onboardingSteps[0].content as string);
  });

  it('keeps the Popover default name when the step has no title', async () => {
    render(
      <OnboardingTour tour={[{ id: 'welcome', content: 'Only content' }]} started>
        <Button data-onboarding-tour-id="welcome">Target</Button>
      </OnboardingTour>
    );
    const dialog = await findDialog();
    const labelledBy = dialog.getAttribute('aria-labelledby');
    // Mantine points it at the target, which carries the matching id
    expect(labelledBy).toBeTruthy();
    expect(document.getElementById(labelledBy!)).toHaveTextContent('Target');
  });

  it('moves the focus into the step popover', async () => {
    render(
      <OnboardingTour tour={onboardingSteps} started>
        <Button data-onboarding-tour-id="welcome">Target</Button>
      </OnboardingTour>
    );
    const dialog = await findDialog();
    await waitFor(() => expect(dialog).toHaveFocus());
  });

  it('leaves the focus alone with withAutoFocus={false}', async () => {
    render(
      <OnboardingTour tour={onboardingSteps} started withAutoFocus={false}>
        <Button data-onboarding-tour-id="welcome">Target</Button>
      </OnboardingTour>
    );
    const dialog = await findDialog();
    expect(dialog).not.toHaveFocus();
  });

  it('gives the focus back to the element that started the tour', async () => {
    function Demo() {
      const [started, setStarted] = React.useState(false);
      return (
        <OnboardingTour
          tour={onboardingSteps}
          started={started}
          onOnboardingTourEnd={() => setStarted(false)}
        >
          <Button onClick={() => setStarted(true)}>Start</Button>
          <Button data-onboarding-tour-id="welcome">Target</Button>
        </OnboardingTour>
      );
    }
    render(<Demo />);
    const start = screen.getByRole('button', { name: 'Start' });
    start.focus();
    fireEvent.click(start);

    const dialog = await findDialog();
    await waitFor(() => expect(dialog).toHaveFocus());

    fireEvent.keyDown(window, { key: 'Escape' });
    await waitFor(() => expect(start).toHaveFocus());
  });

  it('renders a step counter announced to screen readers', async () => {
    render(
      <OnboardingTour tour={onboardingSteps} started withStepCounter>
        <Button data-onboarding-tour-id="welcome">Target</Button>
      </OnboardingTour>
    );
    await findDialog();
    const counter = screen.getByText('1 of 3');
    expect(counter).toHaveAttribute('aria-live', 'polite');
  });

  it('formats the step counter with stepCounterLabel', async () => {
    render(
      <OnboardingTour
        tour={onboardingSteps}
        started
        withStepCounter
        stepCounterLabel={(current, total) => `Step ${current}/${total}`}
      >
        <Button data-onboarding-tour-id="welcome">Target</Button>
      </OnboardingTour>
    );
    await findDialog();
    expect(screen.getByText('Step 1/3')).toBeInTheDocument();
  });

  it('renders no step counter by default', async () => {
    render(
      <OnboardingTour tour={onboardingSteps} started>
        <Button data-onboarding-tour-id="welcome">Target</Button>
      </OnboardingTour>
    );
    await findDialog();
    expect(screen.queryByText('1 of 3')).not.toBeInTheDocument();
  });
});

describe('Steps without a target', () => {
  const findCentered = () =>
    waitFor(() => {
      const el = document.querySelector('[data-onboarding-tour-centered]');
      expect(el).toBeInTheDocument();
      return el as HTMLElement;
    });

  it('shows a step whose id matches no element in the middle of the screen', async () => {
    render(
      <OnboardingTour tour={onboardingSteps} started>
        <Button data-onboarding-tour-id="my-button">Features</Button>
      </OnboardingTour>
    );
    const centered = await findCentered();
    expect(centered).toHaveAttribute('role', 'dialog');
    expect(centered).toHaveTextContent(onboardingSteps[0].title as string);
    const title = document.getElementById(centered.getAttribute('aria-labelledby')!);
    expect(title).toHaveTextContent(onboardingSteps[0].title as string);
    await waitFor(() => expect(centered).toHaveFocus());
  });

  it('moves on to a targeted step from a centered one', async () => {
    render(
      <OnboardingTour tour={onboardingSteps} started>
        <Button data-onboarding-tour-id="my-button">Features</Button>
      </OnboardingTour>
    );
    await findCentered();
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    await waitFor(() =>
      expect(document.querySelector('[data-onboarding-tour-centered]')).not.toBeInTheDocument()
    );
    await waitFor(() =>
      expect(document.querySelector('.mantine-Popover-dropdown')).toHaveTextContent(
        onboardingSteps[1].title as string
      )
    );
  });

  it('does not center a step that has an OnboardingTour.Target', async () => {
    function Outside() {
      return (
        <OnboardingTour.Target id="welcome">
          <Button>Outside</Button>
        </OnboardingTour.Target>
      );
    }
    render(
      <OnboardingTour tour={onboardingSteps} started>
        <Outside />
      </OnboardingTour>
    );
    await waitFor(() =>
      expect(document.querySelector('.mantine-Popover-dropdown')).toBeInTheDocument()
    );
    expect(document.querySelector('[data-onboarding-tour-centered]')).not.toBeInTheDocument();
  });
});

describe('Children across the tour lifecycle', () => {
  function Counter() {
    const [count, setCount] = React.useState(0);
    return <Button onClick={() => setCount((c) => c + 1)}>Count {count}</Button>;
  }

  function Demo() {
    const [started, setStarted] = React.useState(false);
    return (
      <OnboardingTour
        tour={onboardingSteps}
        started={started}
        onOnboardingTourEnd={() => setStarted(false)}
      >
        <Counter />
        <Button onClick={() => setStarted(true)}>Start</Button>
        <div>
          <Button data-onboarding-tour-id="welcome">Welcome</Button>
          <Button data-onboarding-tour-id="my-button">Features</Button>
        </div>
      </OnboardingTour>
    );
  }

  it('keeps the state of the children when the tour starts, changes step and ends', async () => {
    render(<Demo />);
    fireEvent.click(screen.getByRole('button', { name: 'Count 0' }));
    expect(screen.getByRole('button', { name: 'Count 1' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Start' }));
    await waitFor(() =>
      expect(document.querySelector('.mantine-Popover-dropdown')).toBeInTheDocument()
    );
    expect(screen.getByRole('button', { name: 'Count 1' })).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'ArrowRight' });
    await waitFor(() =>
      expect(document.querySelector('.mantine-Popover-dropdown')).toHaveTextContent(
        onboardingSteps[1].title as string
      )
    );
    expect(screen.getByRole('button', { name: 'Count 1' })).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape' });
    await waitFor(() =>
      expect(document.querySelector('[data-onboarding-tour-overlay]')).not.toBeInTheDocument()
    );
    expect(screen.getByRole('button', { name: 'Count 1' })).toBeInTheDocument();
  });

  it('passes render-prop children through untouched', () => {
    function RenderProp({ children }: { children: (value: string) => React.ReactNode }) {
      return <>{children('from render prop')}</>;
    }
    render(
      <OnboardingTour tour={onboardingSteps} started>
        <RenderProp>{(value) => <span>{value}</span>}</RenderProp>
        <Button data-onboarding-tour-id="welcome">Welcome</Button>
      </OnboardingTour>
    );
    expect(screen.getByText('from render prop')).toBeInTheDocument();
  });
});

describe('Review follow-ups (#56)', () => {
  it('gives the focus back after a restart through the controller', async () => {
    let controller: OnboardingTourController | undefined;
    render(
      <>
        <Button>Again</Button>
        <OnboardingTour
          tour={onboardingSteps}
          started
          header={(ctrl: OnboardingTourController) => {
            controller = ctrl;
            return null;
          }}
        >
          <Button data-onboarding-tour-id="welcome">Target</Button>
        </OnboardingTour>
      </>
    );
    await waitFor(() =>
      expect(document.querySelector('.mantine-Popover-dropdown')).toBeInTheDocument()
    );
    fireEvent.keyDown(window, { key: 'Escape' });
    await waitFor(() =>
      expect(document.querySelector('[data-onboarding-tour-overlay]')).not.toBeInTheDocument()
    );

    // `started` is still true: the tour comes back through the controller, not the prop
    const again = screen.getByRole('button', { name: 'Again' });
    again.focus();
    act(() => controller!.startTour());
    const dialog = await waitFor(() => {
      const el = document.querySelector('.mantine-Popover-dropdown');
      expect(el).toBeInTheDocument();
      return el as HTMLElement;
    });
    await waitFor(() => expect(dialog).toHaveFocus());

    fireEvent.keyDown(window, { key: 'Escape' });
    await waitFor(() => expect(again).toHaveFocus());
  });

  it('never flashes the centered fallback for a Target that mounts with its step', async () => {
    const seen: string[] = [];
    const observer = new MutationObserver((records) => {
      records.forEach((r) =>
        r.addedNodes.forEach((n) => {
          if (
            n instanceof HTMLElement &&
            (n.matches('[data-onboarding-tour-centered]') ||
              n.querySelector('[data-onboarding-tour-centered]'))
          ) {
            seen.push('centered');
          }
        })
      );
    });
    observer.observe(document.body, { childList: true, subtree: true });

    function Outside() {
      return (
        <OnboardingTour.Target id="welcome">
          <Button>Outside</Button>
        </OnboardingTour.Target>
      );
    }
    function Demo() {
      const [stepId, setStepId] = React.useState<string>();
      return (
        <OnboardingTour
          tour={onboardingSteps}
          started
          onOnboardingTourChange={(s) => setStepId(s.id)}
        >
          {stepId === 'welcome' && <Outside />}
          <Button data-onboarding-tour-id="my-button">Features</Button>
        </OnboardingTour>
      );
    }
    render(<Demo />);
    await waitFor(() =>
      expect(document.querySelector('.mantine-Popover-dropdown')).toHaveTextContent(
        onboardingSteps[0].title as string
      )
    );
    observer.disconnect();
    expect(seen).toEqual([]);
  });
});

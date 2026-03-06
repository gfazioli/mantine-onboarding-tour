import React from 'react';
import { act, renderHook } from '@testing-library/react';
import { Button, MantineProvider, Title } from '@mantine/core';
import { render, screen } from '@mantine-tests/core';
import {
  OnboardingTourStep,
  useOnboardingTour,
} from './hooks/use-onboarding-tour/use-onboarding-tour';
import { OnboardingTour } from './OnboardingTour';
import { OnboardingTourFocusReveal } from './OnboardingTourFocusReveal/OnboardingTourFocusReveal';

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

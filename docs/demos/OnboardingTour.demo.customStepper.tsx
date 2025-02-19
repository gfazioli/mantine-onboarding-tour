import {
  OnboardingTour,
  OnboardingTourController,
  type OnboardingTourFocusRevealProps,
  type OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import { Badge, Button, Center, Divider, Group, Rating, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  const [started, { open, close }] = useDisclosure(false);

  const focusRevealProps: OnboardingTourFocusRevealProps = {
    popoverProps: {
      position: 'top',
    },
  };

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step-1',
      content: 'Content of the Step 1',
    },
    {
      id: 'step-2',
      title: 'Step-2',
      content: 'Content of the Step 2',
      freeTrialBadge: (
        <Center>
          <Badge color="lime">Free trial available</Badge>
        </Center>
      ),
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: 'Content of the Step 3',
    },
  ];

  const customStepper = (tourController: OnboardingTourController) => (
    <Center>
      <Rating
        count={tourController.tour.length}
        value={tourController.currentStepIndex || 0}
        onChange={(value) => tourController.setCurrentStepIndex(value - 1)}
      />
    </Center>
  );

  return (
    <OnboardingTour
      tour={onboardingSteps}
      focusRevealProps={focusRevealProps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      stepper={customStepper}
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />

        <Group>
          <Button data-onboarding-tour-id="step-1" onClick={open}>
            Step 1
          </Button>
          <Button data-onboarding-tour-id="step-2" onClick={open}>
            Step 2
          </Button>
          <Button data-onboarding-tour-id="step-3" onClick={open}>
            Step 3
          </Button>
        </Group>
      </Stack>
    </OnboardingTour>
  );
}

const code = `
import { FocusRevealProps } from '@gfazioli/mantine-focus-reveal';
import {
  OnboardingTour,
  OnboardingTourController,
  type OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import { Badge, Button, Center, Divider, Group, Rating, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const focusRevealProps: FocusRevealProps = {
    popoverProps: {
      position: 'top',
    },
  };

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step-1',
      content: 'Content of the Step 1',
    },
    {
      id: 'step-2',
      title: 'Step-2',
      content: 'Content of the Step 2',
      freeTrialBadge: (
        <Center>
          <Badge color="lime">Free trial available</Badge>
        </Center>
      ),
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: 'Content of the Step 3',
    },
  ];

  const customStepper = (tourController: OnboardingTourController) => (
    <Center>
      <Rating
        count={tourController.tour.length}
        value={tourController.currentStepIndex || 0}
        onChange={(value) => tourController.setCurrentStepIndex(value - 1)}
      />
    </Center>
  );

  return (
    <OnboardingTour
      tour={onboardingSteps}
      focusRevealProps={focusRevealProps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      stepper={customStepper}
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />

        <Group>
          <Button data-onboarding-tour-id="step-1" onClick={open}>
            Step 1
          </Button>
          <Button data-onboarding-tour-id="step-2" onClick={open}>
            Step 2
          </Button>
          <Button data-onboarding-tour-id="step-3" onClick={open}>
            Step 3
          </Button>
        </Group>
      </Stack>
    </OnboardingTour>
  );
}
`;

export const customStepper: MantineDemo = {
  type: 'code',
  component: Wrapper,
  defaultExpanded: false,
  code: [
    {
      fileName: 'Demo.tsx',
      code: code,
      language: 'tsx',
    },
  ],
};

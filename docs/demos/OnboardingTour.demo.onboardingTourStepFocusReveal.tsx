import {
  OnboardingTour,
  OnboardingTourController,
  type OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import { Button, Divider, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step 1 Title',
      content: 'Content for step 1',
      focusRevealProps: {
        popoverProps: {
          position: 'top',
        },
      },
    },
    {
      id: 'step-2',
      title: 'Step 2 Title',
      content: 'Content for step 2',
      focusRevealProps: (tourController: OnboardingTourController) => {
        return {
          overlayProps: {
            color: '#f00',
          },
          popoverProps: {
            position: 'left-end',
          },
        };
      },
    },
    {
      id: 'step-3',
      title: 'Step 3 Title',
      content: 'Content for step 3',
      focusRevealProps: {
        popoverProps: {
          position: 'right',
          shadow: '0 0 16px 8px rgba(0, 0, 255, 1)',
        },
      },
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />

        <Stack w={200} gap={32}>
          <Button data-onboarding-tour-id="step-1" onClick={open}>
            Title
          </Button>
          <Button data-onboarding-tour-id="step-2" onClick={open}>
            Description
          </Button>
          <Button data-onboarding-tour-id="step-3" onClick={open}>
            Content
          </Button>
        </Stack>
      </Stack>
    </OnboardingTour>
  );
}

const code = `
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Code, Divider, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step 1 Title',
      content: 'Content for step 1',
      focusRevealProps: {
        popoverProps: {
          position: 'top',
        },
      },
    },
    {
      id: 'step-2',
      title: 'Step 2 Title',
      content: 'Content for step 2',
      focusRevealProps: (tourController: OnboardingTourController) => {
        return {
          overlayProps: {
            color: '#f00',
          },
          popoverProps: {
            position: 'bottom',
          },
        };
      },
    },
    {
      id: 'step-3',
      title: 'Step 3 Title',
      content: 'Content for step 3',
      focusRevealProps: {
        popoverProps: {
          position: 'top',
          shadow: '0 0 16px 8px rgba(0, 0, 255, 1)',
        },
      },
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />

        <Stack w={200} gap={32}>
          <Button data-onboarding-tour-id="step-1" onClick={open}>
            Title
          </Button>
          <Button data-onboarding-tour-id="step-2" onClick={open}>
            Description
          </Button>
          <Button data-onboarding-tour-id="step-3" onClick={open}>
            Content
          </Button>
        </Stack>
      </Stack>
    </OnboardingTour>
  );
}
`;

export const onboardingTourStepFocusReveal: MantineDemo = {
  type: 'code',
  component: Demo,
  defaultExpanded: false,
  code: [
    {
      fileName: 'Demo.tsx',
      code,
      language: 'tsx',
    },
  ],
};

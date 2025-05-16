import {
  OnboardingTour,
  OnboardingTourController,
  type OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import { Button, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  const [started, { open, close }] = useDisclosure(false);

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
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: 'Content of the Step 3',
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      focusRevealProps={{
        popoverProps: {
          position: 'top',
        },
      }}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      title={(tourController: OnboardingTourController) => (
        <Title c="blue" order={4}>
          {tourController.currentStep?.title as string}
        </Title>
      )}
      content={(tourController: OnboardingTourController) => (
        <Text c="lime" size="lg">
          {tourController.currentStep?.content as string}
        </Text>
      )}
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
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Code, Divider, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

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
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: 'Content of the Step 3',
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      focusRevealProps={{
        popoverProps: {
          position: 'top',
        },
      }}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      title={(tourController: OnboardingTourController) => (
        <Title c="blue" order={4}>
          {tourController.currentStep?.title as string}
        </Title>
      )}
      content={(tourController: OnboardingTourController) => (
        <Text c="lime" size="lg">
          {tourController.currentStep?.content as string}
        </Text>
      )}
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

export const wrapTitle: MantineDemo = {
  type: 'code',
  component: Wrapper,
  defaultExpanded: false,
  code: [
    {
      fileName: 'Demo.tsx',
      code,
      language: 'tsx',
    },
  ],
};

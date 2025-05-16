import {
  OnboardingTour,
  OnboardingTourController,
  type OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import { Button, Code, Divider, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { LoginForm } from './LoginForm';

function Wrapper() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: (
        <Title order={4} c="lime">
          Title in a <Code>Title</Code> component
        </Title>
      ),
      content: (
        <Text c="red">
          Content in a <Code>Text</Code> component with color red
        </Text>
      ),
    },
    {
      id: 'step-2',
      title: 'Simple Title String',
      content: (tourController: OnboardingTourController) => (
        <Text>
          Content by using the function <Code>(tourController: OnboardingTourController)</Code> so
          we can get some more information such as the step: {tourController.currentStepIndex}
        </Text>
      ),
    },
    {
      id: 'step-3',
      content: <LoginForm />,
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
      title: (
        <Title order={4} c="lime">
          Title in a <Code>Title</Code> component
        </Title>
      ),
      content: (
        <Text c="red">
          Description in a <Code>Text</Code> component with color red
        </Text>
      ),
    },
    {
      id: 'step-2',
      title: 'Simple Title String',
      content: (tourController: OnboardingTourController) => (
        <Text>
          Description by using the function <Code>(tourController: OnboardingTourController)</Code> so we can get some more information such as the step: {tourController.currentStepIndex}
        </Text>
      ),
    },
    {
      id: 'step-3',
      content: <LoginForm />,
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

export const onboardingTourStep: MantineDemo = {
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

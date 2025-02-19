import { OnboardingTour, type OnboardingTourStep } from '@gfazioli/mantine-onboarding-tour';
import { Badge, Button, Divider, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

function AnotherComponent({ open }: { open: () => void }) {
  return (
    <>
      <OnboardingTour.Target id="step-2">
        <Button onClick={open}>Step 2</Button>
      </OnboardingTour.Target>
      <OnboardingTour.Target id="step-3">
        <Button onClick={open}>Step 3</Button>
      </OnboardingTour.Target>
    </>
  );
}

function Wrapper() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step-1',
      content: <Badge color="lime">I'm a direct child of OnboardingTour</Badge>,
    },
    {
      id: 'step-2',
      title: 'Step-2',
      content: <Badge color="yellow">I'm not a direct child of OnboardingTour</Badge>,
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: <Badge color="yellow">I'm not a direct child of OnboardingTour</Badge>,
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      title="The Title for all steps"
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />
        <Stack w={200} gap={32}>
          <Button data-onboarding-tour-id="step-1" onClick={open}>
            Step 1
          </Button>
          <AnotherComponent open={open} />
        </Stack>
      </Stack>
    </OnboardingTour>
  );
}

const code = `
import { OnboardingTour, type OnboardingTourStep } from '@gfazioli/mantine-onboarding-tour';
import { Badge, Button, Divider, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function AnotherComponent({ open }: { open: () => void }) {
  return (
    <>
      <OnboardingTour.Target id="step-2">
        <Button onClick={open}>Step 2</Button>
      </OnboardingTour.Target>
      <OnboardingTour.Target id="step-3">
        <Button onClick={open}>Step 3</Button>
      </OnboardingTour.Target>
    </>
  );
}

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step-1',
      content: <Badge color="lime">I'm a direct child of OnboardingTour</Badge>,
    },
    {
      id: 'step-2',
      title: 'Step-2',
      content: <Badge color="yellow">I'm not a direct child of OnboardingTour</Badge>,
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: <Badge color="yellow">I'm not a direct child of OnboardingTour</Badge>,
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      title="The Title for all steps"
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />
        <Stack w={200} gap={32}>
          <Button data-onboarding-tour-id="step-1" onClick={open}>
            Step 1
          </Button>
          <AnotherComponent open={open} />
        </Stack>
      </Stack>
    </OnboardingTour>
  );
}
`;

export const target: MantineDemo = {
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

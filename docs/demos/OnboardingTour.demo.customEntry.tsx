import {
  OnboardingTour,
  OnboardingTourController,
  type OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import { Badge, Button, Center, Divider, Group, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step-1',
      content: 'Description of the Step 1',
      price: 12,
    },
    {
      id: 'step-2',
      title: 'Step-2',
      content: 'Description of the Step 2',
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: 'Description of the Step 3',
      price: 32,
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      footer={(onboardingTour: OnboardingTourController) => {
        if (onboardingTour.currentStep?.price) {
          return (
            <Center>
              <Text size="xs">
                Price: <Badge color="orange">${onboardingTour.currentStep?.price}</Badge>
              </Text>
            </Center>
          );
        }
        return (
          <Group grow>
            <Badge color="green">Included in all plans</Badge>
          </Group>
        );
      }}
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
          <Button data-onboarding-tour-id="step-2" onClick={open}>
            Step 2
          </Button>
          <Button data-onboarding-tour-id="step-3" onClick={open}>
            Step 3
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
      title: 'Step-1',
      content: 'Description of the Step 1',
      price: 12,
    },
    {
      id: 'step-2',
      title: 'Step-2',
      content: 'Description of the Step 2',
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: 'Description of the Step 3',
      price: 32,
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      footer={(onboardingTour: OnboardingTourController) => {
        if (onboardingTour.currentStep?.price) {
          return (
            <Center>
              <Text size="xs">
                Price: <Badge color="orange">\${onboardingTour.currentStep?.price}</Badge>
              </Text>
            </Center>
          );
        }
        return (
          <Group grow>
            <Badge color="green">Included in all plans</Badge>
          </Group>
        );
      }}
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
          <Button data-onboarding-tour-id="step-2" onClick={open}>
            Step 2
          </Button>
          <Button data-onboarding-tour-id="step-3" onClick={open}>
            Step 3
          </Button>
        </Stack>
      </Stack>
    </OnboardingTour>
  );
}
`;

export const customEntry: MantineDemo = {
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

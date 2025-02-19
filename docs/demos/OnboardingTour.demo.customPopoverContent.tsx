import {
  OnboardingTour,
  type OnboardingTourController,
  type OnboardingTourFocusRevealProps,
  type OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import {
  Anchor,
  BackgroundImage,
  Badge,
  Button,
  Center,
  Divider,
  Group,
  Rating,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step-1',
      content: 'Description of the Step 1',
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    },
    {
      id: 'step-2',
      title: 'Step-2',
      content: 'Description of the Step 2',
      freeTrialBadge: (
        <Center>
          <Badge color="lime">Free trial available</Badge>
        </Center>
      ),
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: 'Description of the Step 3',
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    },
  ];

  const focusRevealProps: OnboardingTourFocusRevealProps = {
    popoverProps: {
      arrowSize: 20,
      position: 'right',
      styles: {
        dropdown: {
          padding: 0,
        },
      },
    },
  };

  const customPopoverContent = (controller: OnboardingTourController) => {
    const { currentStepIndex, tour, nextStep, endTour } = controller;

    if (currentStepIndex === undefined) {
      return null;
    }

    const { title, content, image, freeTrialBadge } = controller.currentStep as OnboardingTourStep;

    return (
      <>
        <BackgroundImage src={image} radius="8px 8px 0 0">
          <Stack w={200} m={24} mb={24}>
            <Title
              c="black"
              order={2}
              style={{
                textShadow: '1px 0 0 white, 0 1px 0 white, -1px 0 0 white, 0 -1px 0 white',
              }}
            >
              {title as string}
            </Title>
          </Stack>
        </BackgroundImage>

        <Group justify="space-between" mx={16}>
          <Rating
            count={tour.length}
            value={currentStepIndex + 1}
            onChange={(value) => controller.setCurrentStepIndex(value - 1)}
          />
          <Anchor size="xs" onClick={endTour}>
            Skip
          </Anchor>
        </Group>
        <Stack mx={16}>
          <Group justify="right"></Group>
          <Text>{content as string}</Text>
          <Button size="xs" onClick={nextStep}>
            Next
          </Button>
        </Stack>
        {freeTrialBadge}
      </>
    );
  };

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      title={() => null}
      content={customPopoverContent}
      withStepper={false}
      withSkipButton={false}
      withPrevButton={false}
      withNextButton={false}
      focusRevealProps={focusRevealProps}
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />

        <Stack w={200} gap={32}>
          <Button data-onboarding-tour-id="step-1">Title</Button>
          <Button data-onboarding-tour-id="step-2">Description</Button>
          <Button data-onboarding-tour-id="step-3">Content</Button>
        </Stack>
      </Stack>
    </OnboardingTour>
  );
}

const code = `
import { OnboardingTour, type OnboardingTourStep } from '@gfazioli/mantine-onboarding-tour';
import { Button, Code, Divider, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

/** Your custom popover content */
import { customPopoverContent } from './customPopoverContent';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step-1',
      content: 'Description of the Step 1',
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    },
    {
      id: 'step-2',
      title: 'Step-2',
      content: 'Description of the Step 2',
      freeTrialBadge: (
        <Center>
          <Badge color="lime">Free trial available</Badge>
        </Center>
      ),
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: 'Description of the Step 3',
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    },
  ];  

  /** Since we are using the FocusReveal component, here we can interact and set all its props. */
  const focusRevealProps: FocusRevealProps = {
    popoverProps: {
      arrowSize: 20,
      position: 'right',
      styles: {
        dropdown: {
          padding: 0,
        },
      },
    },
  };

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      title={() => null}
      content={customPopoverContent}
      withStepper={false}
      withSkipButton={false}
      withPrevButton={false}
      withNextButton={false}
      focusRevealProps={focusRevealProps}
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />

        <Stack w={200} gap={32}>
          <Button data-onboarding-tour-id="step-1">Title</Button>
          <Button data-onboarding-tour-id="step-2">Description</Button>
          <Button data-onboarding-tour-id="step-3">Content</Button>
        </Stack>
      </Stack>
    </OnboardingTour>
  );
}
`;

const codeCustomPopoverContent = `
import type {
  OnboardingTourController,
  OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import {
  Anchor,
  BackgroundImage,
  Button,
  Group,
  Rating,
  Stack,
  Text,
  Title,
} from '@mantine/core';

/**
 * You can use this function to customize the content of the popover.
 * As you can see you have the maximum access to the controller.
 */
export const customPopoverContent = (controller: OnboardingTourController) => {
  const { currentStepIndex, tour, nextStep } = controller;

  if (currentStepIndex === undefined) {
    return null;
  }

    const { title, content, image, freeTrialBadge } = controller.currentStep as OnboardingTourStep;

    return (
      <>
        <BackgroundImage src={image} radius="8px 8px 0 0">
          <Stack w={200} m={24} mb={24}>
            <Title
              c="black"
              order={2}
              style={{
                textShadow: '1px 0 0 white, 0 1px 0 white, -1px 0 0 white, 0 -1px 0 white',
              }}
            >
              {title as string}
            </Title>
          </Stack>
        </BackgroundImage>

        <Group justify="space-between" mx={16}>
          <Rating
            count={tour.length}
            value={currentStepIndex + 1}
            onChange={(value) => controller.setCurrentStepIndex(value - 1)}
          />
          <Anchor size="xs" onClick={endTour}>
            Skip
          </Anchor>
        </Group>
        <Stack mx={16}>
          <Group justify="right"></Group>
          <Text>{content as string}</Text>
          <Button size="xs" onClick={nextStep}>
            Next
          </Button>
        </Stack>
        {freeTrialBadge}
      </>
    );
};
}
`;

export const customPopoverContent: MantineDemo = {
  type: 'code',
  component: Wrapper,
  defaultExpanded: false,
  code: [
    {
      fileName: 'Demo.tsx',
      code: code,
      language: 'tsx',
    },
    {
      fileName: 'customPopoverContent.tsx',
      code: codeCustomPopoverContent,
      language: 'tsx',
    },
  ],
};

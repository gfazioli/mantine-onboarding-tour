import React, { useEffect } from 'react';
import { Badge, Button, Center, Group, Image, Paper, Rating, Text, Title } from '@mantine/core';
import {
  OnboardingTourController,
  OnboardingTourStep,
  useOnboardingTour,
} from '../hooks/use-onboarding-tour/use-onboarding-tour';
import { OnboardingTour } from '../OnboardingTour';
import { OnboardingTourPopoverContentProps } from './OnboardingTourPopoverContent';

export default {
  title: 'OnboardingTourPopoverContent',
  args: {
    loop: false,
    withSkipButton: true,
    withPrevButton: true,
    withNextButton: true,
    withStepper: true,
    // title: undefined,
    // description: undefined,
    // content: undefined,
    nextStepNavigation: 'Next',
    prevStepNavigation: 'Prev',
    endStepNavigation: 'Finish',
    skipNavigation: 'Skip',
  },
  argTypes: {
    loop: { control: 'boolean' },
    withPrevButton: { control: 'boolean' },
    withNextButton: { control: 'boolean' },
    withSkipButton: { control: 'boolean' },
    withStepper: { control: 'boolean' },
    // title: { control: 'text' },
    // description: { control: 'text' },
    // content: { control: 'text' },
    nextStepNavigation: { control: 'text' },
    prevStepNavigation: { control: 'text' },
    endStepNavigation: { control: 'text' },
    skipNavigation: { control: 'text' },
  },
};

const simpleOnboarding: OnboardingTourStep[] = [
  {
    id: 'welcome',
    header: (
      <Image
        radius="md"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
      />
    ),
    title: 'Welcome to Mantine',
    content: 'Mantine is a react components library with focus on usability and accessibility',
    footer: <Badge color="lime">Free trial</Badge>,
  },
  {
    id: 'login',
    title: 'Login',
    content: 'Focus Reveal component allows to highlight important parts of the page',
  },
  {
    id: 'disabled',
    content: 'Use Focus Reveal to create onboarding experience for your users',
  },
  {
    id: 'ask-help',
    title: 'Ask for help',
  },
];

const titleOnboarding: OnboardingTourStep[] = [
  {
    id: 'welcome',
    title: (
      <Title c="violet" order={2} textWrap="pretty">
        Welcome to Mantine OnBoarding Tour
      </Title>
    ),
    content: 'Mantine is a react components library with focus on usability and accessibility',
  },
  {
    id: 'login',
    title: 'Login',
    content: 'Focus Reveal component allows to highlight important parts of the page',
  },
  {
    id: 'disabled',
    title: 'Onboarding',
    content: 'Use Focus Reveal to create onboarding experience for your users',
  },
  {
    id: 'ask-help',
    title: 'Ask for help',
    content: 'Ask for help with any question',
  },
];

export function Usage(props: OnboardingTourPopoverContentProps) {
  const onboardingTour = useOnboardingTour(simpleOnboarding);

  useEffect(onboardingTour.startTour, []);

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <OnboardingTour.PopoverContent tourController={onboardingTour} {...props} />
      </Paper>
    </Center>
  );
}

export function With(props: OnboardingTourPopoverContentProps) {
  const onboardingTour = useOnboardingTour(simpleOnboarding, { loop: props.loop });

  useEffect(onboardingTour.startTour, []);

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <OnboardingTour.PopoverContent tourController={onboardingTour} {...props} />
      </Paper>
    </Center>
  );
}

export function SingleCustomTitle(props: OnboardingTourPopoverContentProps) {
  const onboardingTour = useOnboardingTour(titleOnboarding);

  useEffect(onboardingTour.startTour, []);

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <OnboardingTour.PopoverContent tourController={onboardingTour} {...props} />
      </Paper>
    </Center>
  );
}

export function WholeCustomTitle(props: OnboardingTourPopoverContentProps) {
  const onboardingTour = useOnboardingTour(simpleOnboarding);

  useEffect(onboardingTour.startTour, []);

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <OnboardingTour.PopoverContent tourController={onboardingTour} title="Ciao" {...props} />
      </Paper>
    </Center>
  );
}

export function WholeCustomTitleFunction() {
  const onboardingTour = useOnboardingTour(simpleOnboarding);

  useEffect(onboardingTour.startTour, []);

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <OnboardingTour.PopoverContent
          tourController={onboardingTour}
          title={(onboardingTour: OnboardingTourController) => (
            <Text c="violet" fw={900}>
              Hello, step {onboardingTour.currentStepIndex}
            </Text>
          )}
        />
      </Paper>
    </Center>
  );
}

export function SingleCustomContent() {
  simpleOnboarding[0] = {
    id: 'welcome',
    title: 'Welcome to Mantine',
    content: (
      <Text c="red" fs="italic">
        Mantine is a react components library with focus on usability and accessibility, Oops!
      </Text>
    ),
  };

  simpleOnboarding[1] = {
    id: 'login',
    title: 'Login',
    content: (tourController: OnboardingTourController) => (
      <Text c="green" fs="italic">
        By function {tourController.currentStepIndex}
      </Text>
    ),
  };

  const onboardingTour = useOnboardingTour(simpleOnboarding);

  useEffect(onboardingTour.startTour, []);

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <OnboardingTour.PopoverContent tourController={onboardingTour} />
      </Paper>
    </Center>
  );
}

export function WholeCustomContent() {
  const onboardingTour = useOnboardingTour(simpleOnboarding);

  useEffect(onboardingTour.startTour, []);

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <OnboardingTour.PopoverContent tourController={onboardingTour} content="Always, the same" />
      </Paper>
    </Center>
  );
}

export function WholeCustomContentFunction() {
  const onboardingTour = useOnboardingTour(simpleOnboarding);

  useEffect(onboardingTour.startTour, []);

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <OnboardingTour.PopoverContent
          tourController={onboardingTour}
          content={(tourController: OnboardingTourController) => (
            <Text>Always, the same {tourController.currentStepIndex}</Text>
          )}
        />
      </Paper>
    </Center>
  );
}

export function SingleCustomContentFunction() {
  simpleOnboarding[0] = {
    id: 'welcome',
    content: (tourController: OnboardingTourController) => (
      <Paper withBorder>
        <Title>Custom Content</Title>
        <Group justify="space-between">
          <Badge>Custom</Badge>
          <Button onClick={tourController.nextStep}>Next</Button>
        </Group>
      </Paper>
    ),
  };

  const onboardingTour = useOnboardingTour(simpleOnboarding);

  useEffect(onboardingTour.startTour, []);

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <OnboardingTour.PopoverContent tourController={onboardingTour} />
      </Paper>
    </Center>
  );
}

export function WholeCustomContentComponent() {
  const onboardingTour = useOnboardingTour(simpleOnboarding);

  useEffect(onboardingTour.startTour, []);

  function Content() {
    return (
      <>
        <Group>
          <Badge>Custom</Badge>
          <Text>Content</Text>
        </Group>
      </>
    );
  }

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <OnboardingTour.PopoverContent tourController={onboardingTour} content={<Content />} />
      </Paper>
    </Center>
  );
}

export function CustomNavigation() {
  const onboardingTour = useOnboardingTour(simpleOnboarding);

  useEffect(onboardingTour.startTour, []);

  const customPrev = (tourController: OnboardingTourController) => {
    if (tourController.currentStepIndex === 2) {
      return 'Previous for 2';
    }
    return <Badge>Previous</Badge>;
  };

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <OnboardingTour.PopoverContent
          tourController={onboardingTour}
          nextStepNavigation="Go Forward"
          prevStepNavigation={customPrev}
        />
      </Paper>
    </Center>
  );
}

export function CustomStepper() {
  const onboardingTour = useOnboardingTour(simpleOnboarding);

  useEffect(onboardingTour.startTour, []);

  const customStepper = (tourController: OnboardingTourController) => {
    // eslint-disable-next-line no-console
    console.log(tourController);
    return (
      <Center>
        <Rating
          readOnly={tourController.currentStepIndex === 2}
          count={tourController.tour.length}
          value={tourController.currentStepIndex + 1}
          onChange={(value) => tourController.setCurrentStepIndex(value - 1)}
        />
      </Center>
    );
  };

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <OnboardingTour.PopoverContent tourController={onboardingTour} stepper={customStepper} />
      </Paper>
    </Center>
  );
}

export function CustomFooter() {
  const onboardingTour = useOnboardingTour(simpleOnboarding);

  useEffect(onboardingTour.startTour, []);

  const customFooter = (tourController: OnboardingTourController) => {
    if (tourController.currentStepIndex === 1) {
      return <Badge color="blue">{tourController.currentStep.title as string}</Badge>;
    }
    return (
      <Badge color="gray" size="xs">
        {tourController.currentStep.title as string}
      </Badge>
    );
  };

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <OnboardingTour.PopoverContent tourController={onboardingTour} footer={customFooter} />
      </Paper>
    </Center>
  );
}

export function CustomFooterWithDesc() {
  const onboarding: OnboardingTourStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to Mantine',
      content: 'Mantine is a react components library with focus on usability and accessibility',
      footer: (
        <Text size="xs">Use Focus Reveal to create onboarding experience for your users</Text>
      ),
    },
    {
      id: 'login',
      title: (
        <Title c="red" order={3}>
          Focus Reveal
        </Title>
      ),
      content: 'Focus Reveal component allows to highlight important parts of the page',
    },
    {
      id: 'disabled',
      title: 'Onboarding',
      content: (
        <Text size="xs">Use Focus Reveal to create onboarding experience for your users</Text>
      ),
      footer: "Yep, I'm aware",
    },
    {
      id: 'ask-help',
      title: 'Ask for help',
      content: 'Ask for help with any question',
    },
  ];

  const onboardingTour = useOnboardingTour(onboarding);

  useEffect(onboardingTour.startTour, []);

  const customFooter = (tourController: OnboardingTourController) => {
    if (tourController?.currentStep?.footer) {
      return <Badge color="red">{tourController.currentStep.footer as string}</Badge>;
    }
    return null;
  };

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <OnboardingTour.PopoverContent tourController={onboardingTour} footer={customFooter} />
      </Paper>
    </Center>
  );
}

export function CustomContent() {
  const onboardingTour = useOnboardingTour(simpleOnboarding);

  useEffect(onboardingTour.startTour, []);

  const handleCounter = (tourController: OnboardingTourController) => {
    if (tourController.currentStepIndex === 1) {
      return <Badge>{tourController.currentStep?.title as string}</Badge>;
    }
    return <Text size="xs">{tourController.currentStep?.title as string}</Text>;
  };

  return (
    <Center>
      <Paper w={320} withBorder p={20}>
        <OnboardingTour.PopoverContent tourController={onboardingTour} footer={handleCounter} />
      </Paper>
    </Center>
  );
}

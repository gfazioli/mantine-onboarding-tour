import {
  OnboardingTour,
  OnboardingTourController,
  type OnboardingTourProps,
  type OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Code, Divider, Group, Image, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { Testimonials } from './Testimonials';

function Wrapper(props: Partial<OnboardingTourProps>) {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to the Onboarding Tour Component',
      content:
        'This is a demo of the Onboarding Tour component, which allows to create onboarding experiences for your users.',
    },
    {
      id: 'subtitle',
      title: 'Subtitle',
      content: (
        <Text>
          You can select any component by using the <Code>data-onboarding-tour-id</Code> attribute
        </Text>
      ),
    },
    {
      id: 'button-see-all',
      title: 'New Features',
      content: 'Now you can click on the button "See all" to display all the testimonials',
    },
    {
      id: 'testimonial-2',
      title: 'New Testimonial Layout',
      content: 'We have improved the Testimonial layout',
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      maw={400}
      header={(tourController: OnboardingTourController) => (
        <Image
          mah={150}
          radius="md"
          src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-${tourController.currentStepIndex || 0 + 1}.png`}
        />
      )}
      {...props}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>
        <Divider my={32} />
        <Title data-onboarding-tour-id="welcome" order={4}>
          A simple example of the Onboarding Tour component
        </Title>
        <Text data-onboarding-tour-id="subtitle">👉 New amazing Mantine extension component</Text>

        <Center>
          <Button data-onboarding-tour-id="button-see-all">See all testimonials</Button>
        </Center>

        <Group justify="center">
          <Testimonials testimonial={0} />
          <Testimonials data-onboarding-tour-id="testimonial-2" testimonial={1} />
        </Group>
      </Stack>
    </OnboardingTour>
  );
}

const code = `
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Code, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to the Onboarding Tour Component',
      content:
        'This is a demo of the Onboarding Tour component, which allows to create onboarding experiences for your users.',
    },
    {
      id: 'subtitle',
      title: 'Subtitle',
      content: (
        <Text>
          You can select any component by using the <Code>data-onboarding-tour-id</Code> attribute
        </Text>
      ),
    },
    {
      id: 'button-see-all',
      title: 'New Features',
      content: 'Now you can click on the button "See all" to display all the testimonials',
    },
    {
      id: 'testimonial-2',
      title: 'New Testimonial Layout',
      content: 'We have improved the Testimonial layout',
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      maw={400}
      header={(tourController: OnboardingTourController) => (
        <Image
          mah={150}
          radius="md"
          src={\`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-\${tourController.currentStepIndex + 1}.png\`}
        />
      )}
      {{props}}
    >
      <Stack justify="center" align="center">
        <Title data-onboarding-tour-id="welcome" order={4}>
          A simple example of the Onboarding Tour component
        </Title>
        <Text data-onboarding-tour-id="subtitle">👉 New amazing Mantine extension component</Text>

        <Center>
          <Button data-onboarding-tour-id="button-see-all">
            See all testimonials
          </Button>
        </Center>

        <Group justify="center">
          <Testimonials testimonial={0} />
          <Testimonials data-onboarding-tour-id="testimonial-2" testimonial={1} />
        </Group>
      </Stack>
    </OnboardingTour>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    {
      fileName: 'Demo.tsx',
      code,

      language: 'tsx',
    },
  ],
  controls: [
    {
      prop: 'withSkipButton',
      type: 'boolean',
      initialValue: true,
      libraryValue: true,
    },
    {
      prop: 'withPrevButton',
      type: 'boolean',
      initialValue: true,
      libraryValue: true,
    },
    {
      prop: 'withNextButton',
      type: 'boolean',
      initialValue: true,
      libraryValue: true,
    },
    {
      prop: 'withStepper',
      type: 'boolean',
      initialValue: true,
      libraryValue: true,
    },
    {
      prop: 'header',
      type: 'string',
      initialValue: '',
      libraryValue: '',
    },
    {
      prop: 'footer',
      type: 'string',
      initialValue: '',
      libraryValue: '',
    },
    {
      prop: 'nextStepNavigation',
      type: 'string',
      initialValue: 'Next',
      libraryValue: 'Next',
    },
    {
      prop: 'endStepNavigation',
      type: 'string',
      initialValue: 'Finish',
      libraryValue: 'Finish',
    },
    {
      prop: 'prevStepNavigation',
      type: 'string',
      initialValue: 'Previous',
      libraryValue: 'Previous',
    },
    {
      prop: 'skipNavigation',
      type: 'string',
      initialValue: 'Skip',
      libraryValue: 'Skip',
    },
  ],
};

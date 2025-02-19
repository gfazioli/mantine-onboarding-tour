import { useEffect, useState } from 'react';
import {
  OnboardingTour,
  type OnboardingTourController,
  type OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import {
  AppShell,
  Burger,
  Button,
  Center,
  Group,
  Image,
  ScrollArea,
  Skeleton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Testimonials } from '../demos/Testimonials';

const onboardingSteps: OnboardingTourStep[] = [
  {
    id: 'logo',
    title: 'Welcome to the Onboarding Tour Component',
    content:
      'This is a demo of the Onboarding Tour component, which allows to create onboarding experiences for your users.',
  },
  {
    id: 'item-3',
    title: 'Subtitle',
  },
  {
    id: 'item-10',
    title: 'New Features',
    content: 'Now you can click on the button "See all" to display all the testimonials',
  },
  {
    id: 'login',
    title: 'New login',
    content: 'We have improved the login layout',
  },
  {
    id: 'testimonial',
    title: 'New Testimonial Layout',
    content: 'We have improved the Testimonial layout',
  },
];

export default function HomePage() {
  const [started, { open, close }] = useDisclosure(false);
  const [opened, { toggle }] = useDisclosure();

  const [currentStep, setCurrentStep] = useState<OnboardingTourStep>({ id: 'logo' });

  useEffect(() => {
    open();
  }, []);

  const zIndex = ['logo', 'login'].includes(currentStep?.id as string) ? 103 : 100;

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourClose={close}
      onOnboardingTourChange={setCurrentStep}
      maw={400}
      header={(tourController: OnboardingTourController) => (
        <Image
          mah={150}
          radius="md"
          src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-${tourController.currentStepIndex || 0 + 1}.png`}
        />
      )}
    >
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header style={{ zIndex }}>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Group>
                <MantineLogo data-onboarding-tour-id="logo" size={30} />
              </Group>
              <Button data-onboarding-tour-id="login">Login</Button>
            </Group>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <AppShell.Section>Navbar header</AppShell.Section>
          <AppShell.Section
            grow
            my="md"
            component={ScrollArea}
            style={{ overflow: started ? 'initial' : 'hidden' }}
          >
            60 links in a scrollable section
            {Array(15)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  key={index}
                  data-onboarding-tour-id={`item-${index}`}
                  h={28}
                  mt="sm"
                  animate={false}
                />
              ))}
          </AppShell.Section>
          <AppShell.Section>Navbar footer – always at the bottom</AppShell.Section>
        </AppShell.Navbar>
        <AppShell.Main>
          <Center w="100%">
            <Testimonials data-onboarding-tour-id="testimonial" testimonial={0} />
          </Center>
        </AppShell.Main>
      </AppShell>
    </OnboardingTour>
  );
}

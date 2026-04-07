import { useEffect } from 'react';
import {
  OnboardingTour,
  type OnboardingTourController,
  type OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import {
  AppShell,
  Avatar,
  Burger,
  Button,
  Center,
  Group,
  Image,
  NavLink,
  ScrollArea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Testimonials } from '../demos/Testimonials';

const navItems = [
  { label: 'Dashboard', active: true },
  { label: 'Analytics' },
  { label: 'Reports' },
  { label: 'Settings' },
  { label: 'Users' },
  { label: 'Notifications' },
  { label: 'Billing' },
  { label: 'Integrations' },
  { label: 'Security' },
  { label: 'Support' },
  { label: 'Feedback' },
  { label: 'Changelog' },
  { label: 'API Keys' },
  { label: 'Webhooks' },
  { label: 'Logs' },
];

const onboardingSteps: OnboardingTourStep[] = [
  {
    id: 'logo',
    title: 'Welcome to the Onboarding Tour Component',
    content:
      'This is a demo of the Onboarding Tour component, which allows to create onboarding experiences for your users.',
  },
  {
    id: 'item-3',
    title: 'Settings',
    content: 'Here you can manage all your application settings.',
  },
  {
    id: 'item-10',
    title: 'Feedback',
    content: 'Check the latest feedback and feature requests from your users.',
  },
  {
    id: 'avatar',
    title: 'Your Profile',
    content: 'Click on your avatar to access your profile settings.',
    cutoutPadding: 4,
    cutoutRadius: 9999,
  },
  {
    id: 'login',
    title: 'New login',
    content: 'We have improved the login layout.',
  },
  {
    id: 'testimonial',
    title: 'New Testimonial Layout',
    content: 'We have improved the Testimonial layout.',
  },
];

export default function HomePage() {
  const [started, { open, close }] = useDisclosure(false);
  const [opened, { toggle }] = useDisclosure();

  useEffect(() => {
    open();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourSkip={close}
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
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Group>
                <MantineLogo data-onboarding-tour-id="logo" size={30} />
              </Group>
              <Avatar
                data-onboarding-tour-id="avatar"
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
                radius="xl"
                size="md"
              />
              <Button data-onboarding-tour-id="login">Login</Button>
            </Group>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <AppShell.Section>Navigation</AppShell.Section>
          <AppShell.Section
            grow
            my="md"
            component={ScrollArea}
            style={{ overflow: started ? 'initial' : 'hidden' }}
          >
            {navItems.map((item, index) => (
              <NavLink
                key={item.label}
                data-onboarding-tour-id={`item-${index}`}
                label={item.label}
                active={item.active}
              />
            ))}
          </AppShell.Section>
          <AppShell.Section>Navbar footer</AppShell.Section>
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

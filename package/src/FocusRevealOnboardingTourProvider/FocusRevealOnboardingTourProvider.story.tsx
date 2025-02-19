import React from 'react';
import {
  IconActivity,
  IconBrandMantine,
  IconChevronRight,
  IconCircleOff,
  IconGauge,
  IconHome2,
} from '@tabler/icons-react';
import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Group,
  Modal,
  NavLink,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure, useHotkeys } from '@mantine/hooks';
import { Testimonials, testimonials } from '../../../docs/demos/Testimonials';
import { focusRevealModes } from '../focus-reveal-modes';
import { FocusReveal, FocusRevealProps } from '../FocusReveal';
import type { OnboardingTour } from '../hooks/use-onboarding-tour/use-onboarding-tour';
import { useOnboardingTour } from '../hooks/use-onboarding-tour/use-onboarding-tour';
import { FocusRevealOnboardingTourProvider } from './FocusRevealOnboardingTourProvider';

export default {
  title: 'FocusRevealOnboardingTourProvider',
  args: {
    withReveal: true,
    withOverlay: true,
    focusedMode: 'none',
  },
  argTypes: {
    withReveal: { control: { type: 'boolean' } },
    withOverlay: { control: { type: 'boolean' } },
    focusedMode: {
      control: {
        type: 'select',
      },
      options: focusRevealModes,
    },
  },
};

const onboarding: OnboardingTour[] = [
  {
    id: 'welcome',
    title: 'Welcome to Mantine',
    description: 'Mantine is a react components library with focus on usability and accessibility',
  },
  {
    id: 'login',
    title: 'Focus Reveal',
    description: 'Focus Reveal component allows to highlight important parts of the page',
  },
  {
    id: 'disabled',
    title: 'Onboarding',
    description: 'Use Focus Reveal to create onboarding experience for your users',
  },
  {
    id: 'ask-help',
    title: 'Finish',
    description: 'You are ready to use Mantine',
  },
  {
    id: 'active-light',
    title: 'Active Light',
    description: 'Focus Reveal component allows to highlight important parts of the page',
  },
];

export function Cycle(props: FocusRevealProps) {
  const [focusIndex, setFocusIndex] = React.useState(0);

  useHotkeys([
    ['ArrowRight', () => setFocusIndex(focusIndex + 1 < 4 ? focusIndex + 1 : 0)],
    ['ArrowLeft', () => setFocusIndex(focusIndex - 1 >= 0 ? focusIndex - 1 : 3)],
  ]);

  return (
    <Container>
      <Center>
        <Title order={1}>Focus Reveal</Title>
      </Center>

      <Center>
        <Title order={2}>Mentioned</Title>
      </Center>

      <Group justify="center">
        {testimonials.map(
          (testimonial, index) =>
            index < 4 && (
              <FocusReveal
                key={`focus-reveal-${index}`}
                {...props}
                focused={focusIndex === index}
                transitionProps={{ duration: 0, exitDuration: 0 }}
              >
                <Testimonials key={`box-${index}`} testimonial={0}>
                  <Button onClick={() => setFocusIndex(index + 1 < 4 ? index + 1 : 0)}>Next</Button>
                </Testimonials>
              </FocusReveal>
            )
        )}
      </Group>
    </Container>
  );
}

export function OnboardingTourProvider(props: FocusRevealProps) {
  const [started, { open, close }] = useDisclosure(false);

  return (
    <FocusRevealOnboardingTourProvider tour={onboarding} started={started} onTourEnd={close}>
      <Container fluid h={'100vh'}>
        <Group align="center" justify="space-between">
          <IconBrandMantine size={48} color="violet" />
          <Group>
            <Button variant="light" onClick={open}>
              Start Tour
            </Button>
            <Button data-focus-reveal-onboarding-tour-id="login">Login</Button>
            <Button data-focus-reveal-onboarding-tour-id="ask-help">Ask Help</Button>
          </Group>
        </Group>

        <Divider my={16} />

        <Flex gap={32}>
          <Box maw={200}>
            <NavLink
              href="#required-for-focus"
              label="With icon"
              leftSection={<IconHome2 size={16} stroke={1.5} />}
            />
            <NavLink
              href="#required-for-focus"
              label="With right section"
              leftSection={<IconGauge size={16} stroke={1.5} />}
              rightSection={
                <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
              }
            />

            <NavLink
              data-focus-reveal-onboarding-tour-id="disabled"
              href="#required-for-focus"
              label="Disabled"
              leftSection={<IconCircleOff size={16} stroke={1.5} />}
              disabled
            />

            <NavLink
              href="#required-for-focus"
              label="With description"
              description="Additional information"
              leftSection={
                <Badge size="xs" color="red" circle>
                  3
                </Badge>
              }
            />
            <NavLink
              href="#required-for-focus"
              label="Active subtle"
              leftSection={<IconActivity size={16} stroke={1.5} />}
              rightSection={
                <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
              }
              variant="subtle"
              active
            />
            <NavLink
              data-focus-reveal-onboarding-tour-id="active-light"
              href="#required-for-focus"
              label="Active light"
              leftSection={<IconActivity size={16} stroke={1.5} />}
              rightSection={
                <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
              }
              active
            />
            <NavLink
              href="#required-for-focus"
              label="Active filled"
              leftSection={<IconActivity size={16} stroke={1.5} />}
              rightSection={
                <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
              }
              variant="filled"
              active
            />
          </Box>

          <Divider my={16} orientation="vertical" />

          <Center w="100%">
            <Testimonials data-focus-reveal-onboarding-tour-id="welcome" testimonial={0} />
          </Center>
        </Flex>
      </Container>
    </FocusRevealOnboardingTourProvider>
  );
}

export function OnboardingTour(props: FocusRevealProps) {
  const onboardingTour = useOnboardingTour(onboarding);

  const [opened, { open, close }] = useDisclosure(true);

  const { currentTour, nextTour, prevTour, selectedTourId, startTour, options } = onboardingTour;

  const PopoverContent = () =>
    currentTour && (
      <Box maw={200}>
        <Title order={3}>{currentTour.title}</Title>
        <Text>{currentTour.description}</Text>
        <Group>
          <Button size="xs" onClick={prevTour}>
            Prev
          </Button>
          <Button size="xs" onClick={nextTour}>
            Next
          </Button>
        </Group>
      </Box>
    );

  const PopoverContentDefault = () => (
    <FocusReveal.PopoverContent maw={200} onboardingTour={onboardingTour} />
  );

  useHotkeys([
    ['ArrowRight', () => nextTour()],
    ['ArrowLeft', () => prevTour()],
  ]);

  return (
    <Container fluid h={'100vh'}>
      <Modal opened={opened} onClose={close} centered>
        <Center>
          <Title style={{ textAlign: 'center' }}>Welcome</Title>
        </Center>
        <Center>
          <Title order={2} style={{ textAlign: 'center' }}>
            in the Onboarding Tour Component
          </Title>
        </Center>
        <Center mt={64}>
          <Button
            variant="light"
            onClick={() => {
              close();
              startTour();
            }}
          >
            Start Tour
          </Button>
        </Center>
      </Modal>

      <Group align="center" justify="space-between">
        <IconBrandMantine size={48} color="violet" />
        <Group>
          <FocusReveal
            popoverContent={<PopoverContentDefault />}
            focused={selectedTourId === 'login'}
            transitionProps={{ duration: 0, exitDuration: 0 }}
          >
            <Button>Login</Button>
          </FocusReveal>
          <FocusReveal
            popoverContent={<PopoverContentDefault />}
            focused={selectedTourId === 'ask-help'}
            transitionProps={{ duration: 0, exitDuration: 0 }}
          >
            <Button>Ask Help</Button>
          </FocusReveal>
        </Group>
      </Group>

      <Divider my={16} />

      <Flex gap={32}>
        <Box maw={200}>
          <FocusReveal
            popoverContent={<PopoverContentDefault />}
            focused={selectedTourId === 'with-icon'}
            transitionProps={{ duration: 0, exitDuration: 0 }}
          >
            <NavLink
              href="#required-for-focus"
              label="With icon"
              leftSection={<IconHome2 size={16} stroke={1.5} />}
            />
          </FocusReveal>
          <NavLink
            href="#required-for-focus"
            label="With right section"
            leftSection={<IconGauge size={16} stroke={1.5} />}
            rightSection={
              <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
            }
          />
          <FocusReveal
            popoverContent={<PopoverContentDefault />}
            focused={selectedTourId === 'disabled'}
            transitionProps={{ duration: 0, exitDuration: 0 }}
          >
            <NavLink
              href="#required-for-focus"
              label="Disabled"
              leftSection={<IconCircleOff size={16} stroke={1.5} />}
              disabled
            />
          </FocusReveal>
          <NavLink
            href="#required-for-focus"
            label="With description"
            description="Additional information"
            leftSection={
              <Badge size="xs" color="red" circle>
                3
              </Badge>
            }
          />
          <NavLink
            href="#required-for-focus"
            label="Active subtle"
            leftSection={<IconActivity size={16} stroke={1.5} />}
            rightSection={
              <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
            }
            variant="subtle"
            active
          />
          <FocusReveal
            popoverContent={<PopoverContentDefault />}
            focused={selectedTourId === 'active-light'}
            transitionProps={{ duration: 0, exitDuration: 0 }}
          >
            <NavLink
              href="#required-for-focus"
              label="Active light"
              leftSection={<IconActivity size={16} stroke={1.5} />}
              rightSection={
                <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
              }
              active
            />
          </FocusReveal>
          <FocusReveal
            popoverContent={<PopoverContentDefault />}
            focused={selectedTourId === 'active-filled'}
            transitionProps={{ duration: 0, exitDuration: 0 }}
          >
            <NavLink
              href="#required-for-focus"
              label="Active filled"
              leftSection={<IconActivity size={16} stroke={1.5} />}
              rightSection={
                <IconChevronRight size={12} stroke={1.5} className="mantine-rotate-rtl" />
              }
              variant="filled"
              active
            />
          </FocusReveal>
        </Box>

        <Divider my={16} orientation="vertical" />

        <Center w="100%">
          <FocusReveal
            popoverContent={<PopoverContentDefault />}
            focused={selectedTourId === 'welcome'}
            transitionProps={{ duration: 0, exitDuration: 0 }}
          >
            <Testimonials testimonial={0} />
          </FocusReveal>
        </Center>
      </Flex>
    </Container>
  );
}

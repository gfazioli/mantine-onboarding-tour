import React, { useRef } from 'react';
import { Button, Center, Container, Group, Paper, ScrollArea, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { LoginForm } from '../../../docs/demos/LoginForm';
import { Testimonials } from '../../../docs/demos/Testimonials';
import { focusRevealModes } from './focus-reveal-modes';
import {
  OnboardingTourFocusReveal,
  OnboardingTourFocusRevealProps,
} from './OnboardingTourFocusReveal';
import classes from './Story.module.css';

export default {
  title: 'OnboardingTourFocusReveal',
  args: {
    withReveal: true,
    withOverlay: true,
    disableInteraction: false,
    focusedMode: 'none',
  },
  argTypes: {
    withReveal: { control: { type: 'boolean' } },
    withOverlay: { control: { type: 'boolean' } },
    disableInteraction: { control: { type: 'boolean' } },
    focusedMode: {
      control: {
        type: 'select',
      },
      options: focusRevealModes,
    },
  },
};

export function Focus(props: OnboardingTourFocusRevealProps) {
  const [focused, { toggle }] = useDisclosure(false);

  return (
    <Stack>
      <Center>
        <Button onClick={toggle}>Focus the Bottom Card</Button>
      </Center>

      <Center>
        <Title order={3}>By clicking the button above, the card below will be focused</Title>
      </Center>

      <Center>
        <OnboardingTourFocusReveal focused={focused} {...props}>
          <Testimonials testimonial={0} />
        </OnboardingTourFocusReveal>
      </Center>
    </Stack>
  );
}

export function FocusWithReveal(props: OnboardingTourFocusRevealProps) {
  const [focused, { open, close }] = useDisclosure(false);

  return (
    <Stack>
      <Center>
        <Button variant="light" onClick={open}>
          Focus the Bottom Card
        </Button>
      </Center>

      <Center>
        <Title order={3}>
          By clicking the button above, the card below will be focused and revealed
        </Title>
      </Center>

      <div style={{ height: '1800px' }} />

      <Center>
        <OnboardingTourFocusReveal
          focused={focused}
          {...props}
          // eslint-disable-next-line no-console
          onChange={(focused) => console.log('onChange ', focused)}
          onBlur={() => {
            close();
            // eslint-disable-next-line no-console
            console.log('blurred');
          }}
          // eslint-disable-next-line no-console
          onFocus={() => console.log('focused')}
          // eslint-disable-next-line no-console
          onRevealFinish={() => console.log('scroll finished')}
        >
          <Testimonials testimonial={0}>
            <Button onClick={close}>Close</Button>
          </Testimonials>
        </OnboardingTourFocusReveal>
      </Center>
    </Stack>
  );
}

export function WithPaper(props: OnboardingTourFocusRevealProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Paper ref={scrollRef} h={500} style={{ overflow: 'auto' }}>
      <Center>
        <Button onClick={open}>Reveal the Bottom Card</Button>
      </Center>

      <div style={{ height: '800px' }} />

      <Center>
        <OnboardingTourFocusReveal
          scrollableRef={scrollRef}
          focused={opened}
          {...props}
          onBlur={close}
        >
          <Testimonials testimonial={0} />
        </OnboardingTourFocusReveal>
      </Center>
    </Paper>
  );
}

export function WithPaperRelative(props: OnboardingTourFocusRevealProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Paper
      withBorder
      w={400}
      ref={scrollRef}
      h={500}
      style={{ overflow: 'auto', position: 'relative' }}
    >
      <Center>
        <Button onClick={toggle}>Reveal the Bottom Card</Button>
      </Center>

      <div style={{ height: '300px' }} />

      <Center>
        <OnboardingTourFocusReveal scrollableRef={scrollRef} focused={opened} {...props}>
          <Testimonials testimonial={0} />
        </OnboardingTourFocusReveal>
      </Center>
    </Paper>
  );
}

export function WithScrollArea(props: OnboardingTourFocusRevealProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollArea viewportRef={scrollRef} h={500} style={{ position: 'relative' }}>
      <Center>
        <Button onClick={toggle}>Reveal the Bottom Card</Button>
      </Center>

      <div style={{ height: '800px' }} />

      <Center>
        <OnboardingTourFocusReveal scrollableRef={scrollRef} focused={opened} {...props}>
          <Testimonials testimonial={0} />
        </OnboardingTourFocusReveal>
      </Center>
    </ScrollArea>
  );
}

export function RevealWithFocus(props: OnboardingTourFocusRevealProps) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Container>
      <Center>
        <Title order={1}>Focus Reveal</Title>
      </Center>

      <Center>
        <Button onClick={toggle}>Reveal the Bottom Card</Button>
      </Center>

      <div style={{ height: '800px' }} />

      <Center>
        <Title order={2}>Mentioned</Title>
      </Center>

      <Group justify="center">
        <Testimonials testimonial={0} />
        <OnboardingTourFocusReveal focused={opened} {...props}>
          <Testimonials testimonial={1} />
        </OnboardingTourFocusReveal>
        <Testimonials testimonial={2} />
      </Group>

      <div style={{ height: '1800px' }} />
    </Container>
  );
}

export function CustomMode(props: OnboardingTourFocusRevealProps) {
  const [_] = useDisclosure(false);

  return (
    <Stack>
      <Center>
        <Title order={3}>
          Default focused state is set to `true`, card below is focused by default
        </Title>
      </Center>

      <Center>
        <OnboardingTourFocusReveal defaultFocused {...props} className={classes.custom}>
          <Testimonials testimonial={0} />
        </OnboardingTourFocusReveal>
      </Center>
    </Stack>
  );
}

export function CustomCenterMode(props: OnboardingTourFocusRevealProps) {
  const [_] = useDisclosure(false);

  return (
    <Stack>
      <Center>
        <Title order={3}>
          Default focused state is set to `true`, card below is focused by default
        </Title>
      </Center>

      <Center>
        <OnboardingTourFocusReveal defaultFocused {...props} className={classes.center}>
          <Testimonials testimonial={0} />
        </OnboardingTourFocusReveal>
      </Center>
    </Stack>
  );
}

export function ScrollingDefaultFocused(props: OnboardingTourFocusRevealProps) {
  const [_] = useDisclosure(false);

  return (
    <Stack>
      <Center>
        <Title order={3}>
          Default focused state is set to `true`, card below is focused by default
        </Title>
      </Center>

      <div style={{ height: '1800px' }} />

      <Center>
        <OnboardingTourFocusReveal defaultFocused {...props}>
          <Testimonials testimonial={0} />
        </OnboardingTourFocusReveal>
      </Center>

      <div style={{ height: '1800px' }} />

      <Center>
        <Testimonials testimonial={1} />
      </Center>

      <div style={{ height: '100px' }} />
      <Center>
        <Testimonials testimonial={3} />
        <OnboardingTourFocusReveal defaultFocused {...props} withReveal={false}>
          <Testimonials testimonial={0} />
        </OnboardingTourFocusReveal>
      </Center>

      <div style={{ height: '1800px' }} />
    </Stack>
  );
}

export function RevealLoginWithFocus(props: OnboardingTourFocusRevealProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Container>
      <Center>
        <Title order={1}>Focus Reveal</Title>
      </Center>

      <Center>
        <Button onClick={open}>Reveal the Bottom Card</Button>
      </Center>

      <div style={{ height: '1800px' }} />

      <Center>
        <Title order={2}>Mentioned</Title>
      </Center>

      <Group justify="center">
        <OnboardingTourFocusReveal focused={opened} {...props} onBlur={close}>
          <div>
            <LoginForm />
          </div>
        </OnboardingTourFocusReveal>
      </Group>

      <div style={{ height: '1800px' }} />
    </Container>
  );
}

export function RevealThenFocus(props: OnboardingTourFocusRevealProps) {
  const [focused, { toggle }] = useDisclosure(false);
  const [overlay, { open }] = useDisclosure(false);

  return (
    <Container>
      <Center>
        <Title order={1}>Focus Reveal</Title>
      </Center>

      <Center>
        <Button onClick={toggle}>Reveal the Bottom Card</Button>
      </Center>

      <div style={{ height: '800px' }} />

      <Center>
        <Title order={2}>Mentioned</Title>
      </Center>

      <Group justify="center">
        <Testimonials testimonial={0} />
        <OnboardingTourFocusReveal focused={focused} {...props} withOverlay={overlay}>
          <Testimonials testimonial={1} />
        </OnboardingTourFocusReveal>
        <Testimonials testimonial={2} />
      </Group>

      <Center mt={16}>
        <Button onClick={open}>Set Focus</Button>
      </Center>
    </Container>
  );
}

export function TransitionProps(props: OnboardingTourFocusRevealProps) {
  const [focused, { open }] = useDisclosure(false);

  return (
    <Stack>
      <Center>
        <Title order={3}>
          Default focused state is set to `true`, card below is focused by default
        </Title>
      </Center>

      <Center>
        <Button onClick={open}>Focus the Bottom Card</Button>
      </Center>

      <Center>
        <OnboardingTourFocusReveal
          defaultFocused={focused}
          {...props}
          transitionProps={{
            duration: 2000,
            transition: 'pop',
          }}
        >
          <Testimonials testimonial={0} />
        </OnboardingTourFocusReveal>
      </Center>
    </Stack>
  );
}

import React, { useRef } from 'react';
import { Button, Center, Container, Group, Paper, ScrollArea, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { LoginForm } from '../../docs/demos/LoginForm';
import { Testimonials } from '../../docs/demos/Testimonials';
import { focusRevealModes } from './focus-reveal-modes';
import { FocusReveal, FocusRevealProps } from './FocusReveal';
import classes from './CustomMode.module.css';

export default {
  title: 'FocusReveal',
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

export function PopoverFocusWithReveal(props: FocusRevealProps) {
  const [focused, { open, close }] = useDisclosure(false);

  const PopoverContent = () => (
    <div style={{ padding: 20 }}>
      <Title order={3}>Popover content</Title>
      <Button onClick={close}>Focus the Bottom Card</Button>
    </div>
  );

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
        <FocusReveal
          popoverContent={<PopoverContent />}
          focused={focused}
          {...props}
          onChange={(focused) => console.log('onChange ', focused)}
          onBlur={() => {
            close();
            console.log('blurred');
          }}
          onFocus={() => console.log('focused')}
          onRevealFinish={() => console.log('scroll finished')}
        >
          <Testimonials testimonial={0}>
            <Button onClick={close}>Close</Button>
          </Testimonials>
        </FocusReveal>
      </Center>
    </Stack>
  );
}

export function TransitionProps(props: FocusRevealProps) {
  const [focused, { open, toggle }] = useDisclosure(false);

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
        <FocusReveal
          defaultFocused={focused}
          {...props}
          transitionProps={{
            duration: 2000,
            transition: 'pop',
          }}
        >
          <Testimonials testimonial={0} />
        </FocusReveal>
      </Center>
    </Stack>
  );
}

export function CustomMode(props: FocusRevealProps) {
  const [focused, { toggle }] = useDisclosure(false);

  return (
    <Stack>
      <Center>
        <Title order={3}>
          Default focused state is set to `true`, card below is focused by default
        </Title>
      </Center>

      <Center>
        <FocusReveal defaultFocused={true} {...props} className={classes.custom}>
          <Testimonials testimonial={0} />
        </FocusReveal>
      </Center>
    </Stack>
  );
}

export function DefaultFocused(props: FocusRevealProps) {
  const [focused, { toggle }] = useDisclosure(false);

  return (
    <FocusReveal.Group focusedMode="scale">
      <Stack>
        <Center>
          <Title order={3}>
            Default focused state is set to `true`, card below is focused by default
          </Title>
        </Center>

        <div style={{ height: '1800px' }} />

        <Center>
          <FocusReveal>
            <Testimonials testimonial={0} />
          </FocusReveal>
        </Center>

        <div style={{ height: '300px' }} />

        <Center>
          <FocusReveal>
            <Testimonials testimonial={1} />
          </FocusReveal>
        </Center>

        <div style={{ height: '300px' }} />

        <Center>
          <FocusReveal>
            <Testimonials testimonial={2} />
          </FocusReveal>
        </Center>

        <div style={{ height: '200px' }} />
      </Stack>
    </FocusReveal.Group>
  );
}

export function ScrollingDefaultFocused(props: FocusRevealProps) {
  const [focused, { toggle }] = useDisclosure(false);

  return (
    <Stack>
      <Center>
        <Title order={3}>
          Default focused state is set to `true`, card below is focused by default
        </Title>
      </Center>

      <div style={{ height: '1800px' }} />

      <Center>
        <FocusReveal defaultFocused={true} {...props}>
          <Testimonials testimonial={0} />
        </FocusReveal>
      </Center>

      <div style={{ height: '1800px' }} />

      <Center>
        <Testimonials testimonial={1} />
      </Center>

      <div style={{ height: '100px' }} />
      <Center>
        <Testimonials testimonial={3} />
        <FocusReveal defaultFocused={true} {...props} withReveal={false}>
          <Testimonials testimonial={0} />
        </FocusReveal>
      </Center>

      <div style={{ height: '1800px' }} />
    </Stack>
  );
}

export function Focus(props: FocusRevealProps) {
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
        <FocusReveal focused={focused} {...props}>
          <Testimonials testimonial={0} />
        </FocusReveal>
      </Center>
    </Stack>
  );
}

export function FocusWithReveal(props: FocusRevealProps) {
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
        <FocusReveal
          focused={focused}
          {...props}
          onChange={(focused) => console.log('onChange ', focused)}
          onBlur={() => {
            close();
            console.log('blurred');
          }}
          onFocus={() => console.log('focused')}
          onRevealFinish={() => console.log('scroll finished')}
        >
          <Testimonials testimonial={0}>
            <Button onClick={close}>Close</Button>
          </Testimonials>
        </FocusReveal>
      </Center>
    </Stack>
  );
}

export function WithPaper(props: FocusRevealProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Paper ref={scrollRef} h={500} style={{ overflow: 'auto' }}>
      <Center>
        <Button onClick={open}>Reveal the Bottom Card</Button>
      </Center>

      <div style={{ height: '800px' }} />

      <Center>
        <FocusReveal scrollableRef={scrollRef} focused={opened} {...props} onBlur={close}>
          <Testimonials testimonial={0} />
        </FocusReveal>
      </Center>
    </Paper>
  );
}

export function WithPaperRelative(props: FocusRevealProps) {
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
        <FocusReveal scrollableRef={scrollRef} focused={opened} {...props}>
          <Testimonials testimonial={0} />
        </FocusReveal>
      </Center>
    </Paper>
  );
}

export function WithScrollArea(props: FocusRevealProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollArea viewportRef={scrollRef} h={500} style={{ position: 'relative' }}>
      <Center>
        <Button onClick={toggle}>Reveal the Bottom Card</Button>
      </Center>

      <div style={{ height: '800px' }} />

      <Center>
        <FocusReveal scrollableRef={scrollRef} focused={opened} {...props}>
          <Testimonials testimonial={0} />
        </FocusReveal>
      </Center>
    </ScrollArea>
  );
}

export function RevealWithFocus(props: FocusRevealProps) {
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
        <FocusReveal focused={opened} {...props}>
          <Testimonials testimonial={1} />
        </FocusReveal>
        <Testimonials testimonial={2} />
      </Group>

      <div style={{ height: '1800px' }} />
    </Container>
  );
}

export function RevealLoginWithFocus(props: FocusRevealProps) {
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
        <FocusReveal focused={opened} {...props} onBlur={close}>
          <div>
            <LoginForm />
          </div>
        </FocusReveal>
      </Group>

      <div style={{ height: '1800px' }} />
    </Container>
  );
}

export function RevealThenFocus(props: FocusRevealProps) {
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
        <FocusReveal focused={focused} {...props} withOverlay={overlay}>
          <Testimonials testimonial={1} />
        </FocusReveal>
        <Testimonials testimonial={2} />
      </Group>

      <Center mt={16}>
        <Button onClick={open}>Set Focus</Button>
      </Center>
    </Container>
  );
}

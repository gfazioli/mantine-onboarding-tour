import { useRef } from 'react';
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Paper, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { Testimonials } from './Testimonials';

function Wrapper() {
  const [focused, { close, open }] = useDisclosure(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Paper container Example</Title>

      <Paper
        shadow="sm"
        withBorder
        radius={16}
        p={16}
        ref={scrollRef}
        h={500}
        style={{ overflow: 'auto' }}
      >
        <Center>
          <Button onClick={open}>Reveal the Bottom Card</Button>
        </Center>

        <Divider my={400} label="Divider" />

        <Center>
          <OnboardingTour.FocusReveal
            scrollableRef={scrollRef as React.RefObject<HTMLDivElement>}
            focused={focused}
            onBlur={close}
          >
            <Testimonials testimonial={0} />
          </OnboardingTour.FocusReveal>
        </Center>
      </Paper>
    </Stack>
  );
}

const code = `
import { useRef } from 'react';
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Paper, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Paper container Example</Title>

      <Paper
        shadow="sm"
        withBorder
        radius={16}
        p={16}
        ref={scrollRef}
        h={500}
        style={{ overflow: 'auto' }}
      >
        <Center>
          <Button onClick={open}>Reveal the Bottom Card</Button>
        </Center>

        <Divider my={400} label="Divider" />

        <Center>
          <OnboardingTour.FocusReveal
            scrollableRef={scrollRef as React.RefObject<HTMLDivElement>}
            focused={focused}
            onBlur={close}
          >
            <Testimonials testimonial={0} />
          </OnboardingTour.FocusReveal>
        </Center>
      </Paper>
    </Stack>
  );
}
`;

export const focusRevealPaper: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};

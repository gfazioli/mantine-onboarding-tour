import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { Testimonials } from './Testimonials';

function Wrapper() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Popover example</Title>

      <Center>
        <Button onClick={open}>Reveal the Bottom Card</Button>
      </Center>

      <Divider my={200} label="Divider" />

      <Center>
        <OnboardingTour.FocusReveal
          focused={focused}
          onBlur={close}
          popoverContent={<h1>Hello, World!</h1>}
        >
          <Testimonials testimonial={0} />
        </OnboardingTour.FocusReveal>
      </Center>
    </Stack>
  );
}

const code = `
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Popover example</Title>

      <Center>
        <Button onClick={open}>Reveal the Bottom Card</Button>
      </Center>

      <Divider my={200} label="Divider" />

      <Center>
        <OnboardingTour.FocusReveal focused={focused} onBlur={close} popoverContent={<h1>Hello, World!</h1>}>
          <Testimonials testimonial={0} />
        </OnboardingTour.FocusReveal>
      </Center>
    </Stack>
  );
}
`;

export const focusRevealPopover: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};

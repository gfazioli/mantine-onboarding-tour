import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { Testimonials } from './Testimonials';

function Wrapper() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Popover width example</Title>

      <Center>
        <Button onClick={open}>Reveal the Bottom Card</Button>
      </Center>

      <Divider my={200} label="Divider" />

      <Center>
        <OnboardingTour.FocusReveal
          focused={focused}
          onBlur={close}
          popoverContent={
            <Stack gap="xs">
              <Title order={5}>A step with a lot of content</Title>
              <Text size="sm">
                Without a width ceiling the dropdown grows to fit its content on a single line
                (width: max-content), so wide or non-wrapping content overflows the viewport. The
                default max-width of 400px keeps the popover readable and on-screen.
              </Text>
            </Stack>
          }
          popoverProps={{
            position: 'top',
            // Default max-width is 400px. Uncomment to change it (use 'none' to remove the cap):
            // styles: { dropdown: { maxWidth: 560 } },
          }}
        >
          <Testimonials testimonial={0} />
        </OnboardingTour.FocusReveal>
      </Center>
    </Stack>
  );
}

const code = `
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Popover width example</Title>

      <Center>
        <Button onClick={open}>Reveal the Bottom Card</Button>
      </Center>

      <Divider my={200} label="Divider" />

      <Center>
        <OnboardingTour.FocusReveal
          focused={focused}
          onBlur={close}
          popoverContent={
            <Stack gap="xs">
              <Title order={5}>A step with a lot of content</Title>
              <Text size="sm">
                Without a width ceiling the dropdown grows to fit its content on a single line
                (width: max-content), so wide or non-wrapping content overflows the viewport. The
                default max-width of 400px keeps the popover readable and on-screen.
              </Text>
            </Stack>
          }
          popoverProps={{
            position: 'top',
            // Default max-width is 400px. Uncomment to change it (use 'none' to remove the cap):
            // styles: { dropdown: { maxWidth: 560 } },
          }}
        >
          <Testimonials testimonial={0} />
        </OnboardingTour.FocusReveal>
      </Center>
    </Stack>
  );
}
`;

export const focusRevealPopoverWidth: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};

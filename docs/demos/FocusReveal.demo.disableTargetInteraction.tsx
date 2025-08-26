import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Group, Stack, Switch, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { Testimonials } from './Testimonials';

function Wrapper() {
  const [focused, { open, close }] = useDisclosure(false);
  const [disableTargetInteraction, setDisableTargetInteraction] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Disable target interactions</Title>

      <Center>
        <Group>
          <Button onClick={open}>Focus the component</Button>
          <Switch
            label="Disable target interactions"
            checked={disableTargetInteraction}
            onChange={() => setDisableTargetInteraction.toggle()}
          />
        </Group>
      </Center>

      <Divider my={100} />

      <Group justify="center">
        <OnboardingTour.FocusReveal
          focused={focused}
          onBlur={close}
          disableTargetInteraction={disableTargetInteraction}
          withOverlay
        >
          <Stack align="center">
            <Testimonials testimonial={1} withButton />
            <Button>Click inside (will not fire when focused)</Button>
            <Text size="sm" c="dimmed">
              Interaction disabled while focused: pointer events are blocked.
            </Text>
          </Stack>
        </OnboardingTour.FocusReveal>
      </Group>

      <Divider my={100} />
    </Stack>
  );
}

const code = `
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Group, Stack, Switch, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { open, close }] = useDisclosure(false);
  const [disableTargetInteraction, setDisableTargetInteraction] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Disable target interactions</Title>

      <Center>
        <Group>
          <Button onClick={open}>Focus the component</Button>
          <Switch
            label="Disable target interactions"
            checked={disableTargetInteraction}
            onChange={() => setDisableTargetInteraction.toggle()}
          />
        </Group>
      </Center>

      <Divider my={100} />

      <Group justify="center">
        <OnboardingTour.FocusReveal
          focused={focused}
          onBlur={close}
          disableTargetInteraction={disableTargetInteraction}
          withOverlay
        >
          <Stack align="center">
            <Testimonials testimonial={1} withButton />
            <Button>Click inside (will not fire when focused)</Button>
            <Text size="sm" c="dimmed">
              Interaction disabled while focused: pointer events are blocked.
            </Text>
          </Stack>
        </OnboardingTour.FocusReveal>
      </Group>

      <Divider my={100} />
    </Stack>
  );
}
`;

export const focusRevealDisableInteraction: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};

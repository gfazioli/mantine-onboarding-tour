import { useState } from 'react';
import {
  focusRevealModes,
  OnboardingTour,
  OnboardingTourFocusRevealFocusedMode,
} from '@gfazioli/mantine-onboarding-tour';
import { Center, Code, Divider, Group, Select, Stack, Text, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { Testimonials } from './Testimonials';

function Wrapper() {
  const [focusedMode, setFocusedMode] = useState<
    OnboardingTourFocusRevealFocusedMode | string | null
  >('scale');

  return (
    <>
      <Stack justify="center" align="center">
        <Title order={4}>Group Example</Title>

        <Group justify="left">
          <Select
            data={focusRevealModes}
            value={focusedMode}
            onChange={setFocusedMode}
            label="Focused mode"
          />
        </Group>

        <Center>
          <Text>
            The <Code>defaultFocused</Code> props is set to <Code>true</Code>, card below is focused
            by default
          </Text>
        </Center>

        <Divider
          mb={600}
          label={
            <>
              <Text fz={48}>👇</Text>
              <Text>Scroll down</Text>
            </>
          }
        />
      </Stack>

      <OnboardingTour.FocusReveal.Group
        focusedMode={focusedMode as OnboardingTourFocusRevealFocusedMode}
      >
        <Stack>
          <Center>
            <OnboardingTour.FocusReveal>
              <Testimonials testimonial={0} />
            </OnboardingTour.FocusReveal>
          </Center>

          <Divider my={100} />

          <Center>
            <OnboardingTour.FocusReveal defaultFocused={false}>
              <Testimonials testimonial={1} />
            </OnboardingTour.FocusReveal>
          </Center>

          <Divider my={100} />

          <Center>
            <OnboardingTour.FocusReveal>
              <Testimonials testimonial={2} />
            </OnboardingTour.FocusReveal>
          </Center>

          <Divider my={100} />
        </Stack>
      </OnboardingTour.FocusReveal.Group>
    </>
  );
}

const code = `
import { useState } from 'react';
import { FocusRevealFocusedMode, focusRevealModes } from '@gfazioli/mantine-focus-reveal';
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Center, Code, Divider, Group, Select, Stack, Text, Title } from '@mantine/core';

function Demo() {
  const [focusedMode, setFocusedMode] = useState<string | null>('scale');

  return (
    <>
      <Stack justify="center" align="center">
        <Title order={4}>Group Example</Title>

        <Group justify="left">
          <Select
            data={[
              'border',
              'elastic',
              'glow',
              'glow-blue',
              'glow-green',
              'glow-red',
              'none',
              'pulse',
              'rotate',
              'scale',
              'shake',
              'zoom',
            ]}
            value={focusedMode}
            onChange={setFocusedMode}
            label="Focused mode"
          />
        </Group>

        <Center>
          <Text>
            The <Code>defaultFocused</Code> props is set to <Code>true</Code>, card below is focused
            by default
          </Text>
        </Center>

        <Divider
          mb={600}
          label={
            <>
              <Text fz={48}>👇</Text>
              <Text>Scroll down</Text>
            </>
          }
        />
      </Stack>

      <OnboardingTour.FocusReveal.Group focusedMode={focusedMode as FocusRevealFocusedMode}>
        <Stack>
          <Center>
            <OnboardingTour.FocusReveal>
              <Testimonials testimonial={0} />
            </OnboardingTour.FocusReveal>
          </Center>

          <Divider my={100} />

          <Center>
            <OnboardingTour.FocusReveal defaultFocused={false}>
              <Testimonials testimonial={1} />
            </OnboardingTour.FocusReveal>
          </Center>

          <Divider my={100} />

          <Center>
            <OnboardingTour.FocusReveal>
              <Testimonials testimonial={2} />
            </OnboardingTour.FocusReveal>
          </Center>

          <Divider my={100} />
        </Stack>
      </OnboardingTour.FocusReveal.Group>
    </>
  );
}  
`;

export const focusRevealGroupProps: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};

import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Center, Code, Divider, Stack, Text, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { Testimonials } from './Testimonials';

function Wrapper() {
  return (
    <Stack justify="center" align="center">
      <Title order={4}>Simple (uncontrolled) Example</Title>

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

      <Center>
        <OnboardingTour.FocusReveal defaultFocused withReveal={false}>
          <Testimonials testimonial={0} />
        </OnboardingTour.FocusReveal>
      </Center>

      <Divider my={200} />
    </Stack>
  );
}

const code = `
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Center, Code, Divider, Stack, Text, Title } from '@mantine/core';

function Demo() {

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Simple (uncontrolled) Example</Title>

      <Center>
        <Text>
          The <Code>defaultFocused</Code> props is set to <Code>true</Code>, card below is focused
          by default
        </Text>
      </Center>

      <Divider mb={600}
        label={
          <>
            <Text fz={48}>👇</Text>
            <Text>Scroll down</Text>
          </>
        }
      />

      <Center>
        <OnboardingTour.FocusReveal defaultFocused={true} withReveal={false}>
          <Testimonials testimonial={0} />
        </OnboardingTour.FocusReveal>
      </Center>

      <Divider my={200} />
    </Stack>
  );
}
`;

export const focusRevealUncontrolled: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};

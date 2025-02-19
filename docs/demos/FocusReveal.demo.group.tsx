import { FocusReveal } from '@gfazioli/mantine-focus-reveal';
import { Center, Code, Divider, Stack, Text, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { Testimonials } from './Testimonials';

function Wrapper() {
  return (
    <>
      <Stack justify="center" align="center">
        <Title order={4}>Group Example</Title>

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

      <FocusReveal.Group focusedMode="scale">
        <Stack>
          <Center>
            <FocusReveal>
              <Testimonials testimonial={0} />
            </FocusReveal>
          </Center>

          <Divider my={200} />

          <Center>
            <FocusReveal>
              <Testimonials testimonial={1} />
            </FocusReveal>
          </Center>

          <Divider my={200} />

          <Center>
            <FocusReveal>
              <Testimonials testimonial={2} />
            </FocusReveal>
          </Center>

          <Divider my={200} />
        </Stack>
      </FocusReveal.Group>
    </>
  );
}

const code = `
import { FocusReveal } from '@gfazioli/mantine-focus-reveal';
import { Center, Code, Divider, Stack, Text, Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Stack justify="center" align="center">
        <Title order={4}>Group Example</Title>

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

      <FocusReveal.Group focusedMode="scale">
        <Stack>
          <Center>
            <FocusReveal>
              <Testimonials testimonial={0} />
            </FocusReveal>
          </Center>

          <Divider my={200} />

          <Center>
            <FocusReveal>
              <Testimonials testimonial={1} />
            </FocusReveal>
          </Center>

          <Divider my={200} />

          <Center>
            <FocusReveal>
              <Testimonials testimonial={2} />
            </FocusReveal>
          </Center>

          <Divider my={200} />
        </Stack>
      </FocusReveal.Group>
    </>
  );
}
`;

export const group: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};

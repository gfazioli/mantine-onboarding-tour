import { FocusReveal, FocusRevealProps } from '@gfazioli/mantine-focus-reveal';
import { Button, Center, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { Testimonials } from './Testimonials';

function Wrapper(props: Partial<FocusRevealProps>) {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>A simple example of the Focus Reveal component</Title>
      <Text>👉 Scroll up the page to remove the focus</Text>

      <Center>
        <Button onClick={open}>Set the Focus to the below component</Button>
      </Center>

      <Divider my={256} />

      <Group justify="center">
        <Testimonials testimonial={0} />
        <FocusReveal focused={focused} {...props} onBlur={close}>
          <Testimonials testimonial={1} />
        </FocusReveal>
      </Group>
    </Stack>
  );
}

const code = `
import { FocusReveal, FocusRevealProps } from '@gfazioli/mantine-focus-reveal';
import { Button, Center, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>A simple example of the Focus Reveal component</Title>
      <Text>👉 Scroll up the page to remove the focus</Text>

      <Center>
        <Button onClick={open}>Set the Focus to the below component</Button>
      </Center>

      <Divider my={256} />

      <Group justify="center">
        <Testimonials testimonial={0} />
        <FocusReveal focused={focused} {...props} onBlur={close}>
          <Testimonials testimonial={1} />
        </FocusReveal>
      </Group>
    </Stack>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    {
      fileName: 'Demo.tsx',
      code: code,

      language: 'tsx',
    },
  ],
  controls: [
    {
      prop: 'withReveal',
      type: 'boolean',
      initialValue: true,
      libraryValue: true,
    },
    {
      prop: 'withOverlay',
      type: 'boolean',
      initialValue: true,
      libraryValue: true,
    },
    {
      prop: 'focusedMode',
      type: 'select',
      initialValue: 'none',
      libraryValue: 'none',
      data: [
        { label: 'None', value: 'none' },
        { label: 'Pulse', value: 'pulse' },
        { label: 'Glow', value: 'glow' },
        { label: 'Border', value: 'border' },
        { label: 'Elastic', value: 'elastic' },
        { label: 'Glow Blue', value: 'glow-blue' },
        { label: 'Glow Green', value: 'glow-green' },
        { label: 'Glow Red', value: 'glow-red' },
        { label: 'Rotate', value: 'rotate' },
        { label: 'Scale', value: 'scale' },
        { label: 'Shake', value: 'shake' },
        { label: 'Zoom', value: 'zoom' },
      ],
    },
  ],
};

import { FocusReveal } from '@gfazioli/mantine-focus-reveal';
import { Button, Center, Divider, Group, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { Testimonials } from './Testimonials';

function Wrapper() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Overlay Example</Title>

      <Center>
        <Button onClick={open}>Set the Focus to the below component</Button>
      </Center>

      <Divider my={200} />

      <Group justify="center">
        <FocusReveal
          focused={focused}
          onBlur={close}
          overlayProps={{
            color: 'rgba(255,0,0,1)',
            blur: 0,
          }}
        >
          <Testimonials testimonial={1} />
        </FocusReveal>
      </Group>

      <Divider my={200} />
    </Stack>
  );
}

const code = `
import { FocusReveal } from '@gfazioli/mantine-focus-reveal';
import { Button, Center, Divider, Group, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Overlay Example</Title>

      <Center>
        <Button onClick={open}>Set the Focus to the below component</Button>
      </Center>

      <Divider my={200} />

      <Group justify="center">
        <FocusReveal
          focused={focused}
          onBlur={close}
          overlayProps={{
            color: 'rgba(255,0,0,1)',
            blur: 0,
          }}
        >
          <Testimonials testimonial={1} />
        </FocusReveal>
      </Group>

      <Divider my={200} />
    </Stack>
  );
}
`;

export const overlay: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};

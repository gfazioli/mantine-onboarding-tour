import { FocusReveal, FocusRevealProps } from '@gfazioli/mantine-focus-reveal';
import { Button, Center, Divider, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { Testimonials } from './Testimonials';

function Wrapper(props: Partial<FocusRevealProps>) {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Popover example</Title>

      <Center>
        <Button onClick={open}>Reveal the Bottom Card</Button>
      </Center>

      <Divider my={200} label="Divider" />

      <Center>
        <FocusReveal
          focused={focused}
          onBlur={close}
          popoverContent={<h1>Hello, World!</h1>}
          popoverProps={{
            position: 'top',
            withArrow: false,
            shadow: 'md',
            radius: 256,
          }}
        >
          <Testimonials testimonial={0} />
        </FocusReveal>
      </Center>
    </Stack>
  );
}

const code = `
import { FocusReveal } from '@gfazioli/mantine-focus-reveal';
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
        <FocusReveal
          focused={focused}
          onBlur={close}
          popoverContent={<h1>Hello, World!</h1>}
          popoverProps={{
            position: 'top',
            withArrow: false,
            shadow: 'md',
            radius: 256,
          }}
        >
          <Testimonials testimonial={0} />
        </FocusReveal>
      </Center>
    </Stack>
  );
}
`;

export const popoverProps: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};

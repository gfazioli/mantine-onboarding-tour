import { FocusReveal } from '@gfazioli/mantine-focus-reveal';
import { Button, Center, Divider, Group, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { Testimonials } from './Testimonials';
import classes from './CustomMode.module.css';

function Wrapper() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Custom Focused Mode Example</Title>

      <Center>
        <Button onClick={open}>Set the Focus to the below component</Button>
      </Center>

      <Divider my={100} label="Divider" />

      <Group justify="center">
        <FocusReveal focused={focused} onBlur={close} className={classes.custom}>
          <Testimonials testimonial={1} />
        </FocusReveal>
      </Group>
    </Stack>
  );
}

const code = `
import { FocusReveal } from '@gfazioli/mantine-focus-reveal';
import { Button, Center, Divider, Group, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Custom Focused Mode Example</Title>

      <Center>
        <Button onClick={open}>Set the Focus to the below component</Button>
      </Center>

      <Divider my={100} label="Divider" />

      <Group justify="center">
        <FocusReveal focused={focused} onBlur={close} className={classes.custom}>
          <Testimonials testimonial={1} />
        </FocusReveal>
      </Group>
    </Stack>
  );
}
`;

const customClasses = `
.custom {
  &[data-focus-reveal-focused="true"] {
    border: 4px solid red;
    transform: rotateZ(2deg);
  }
}
`;

export const focusMode: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'Custom.module.css', code: customClasses },
  ],
  defaultExpanded: false,
};

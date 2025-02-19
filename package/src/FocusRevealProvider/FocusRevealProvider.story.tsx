import React from 'react';
import { Button, Center, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Testimonials } from '../../../docs/demos/Testimonials';
import { FocusRevealProps } from '../FocusReveal';
import { FocusRevealProvider } from './FocusRevealProvider';

export default {
  title: 'FocusRevealProvider',
  args: {},
  argTypes: {},
};

export function Usage(props: FocusRevealProps) {
  const [focused, { open }] = useDisclosure(false);

  return (
    <FocusRevealProvider focused={focused}>
      <Stack>
        <Center>
          <Button onClick={open}>Focus the Bottom Card</Button>
        </Center>

        <Center>
          <Title order={3}>By clicking the button above, the card below will be focused</Title>
        </Center>

        <Center>
          <Testimonials data-focus-reveal={true} testimonial={0} />
        </Center>
      </Stack>
    </FocusRevealProvider>
  );
}

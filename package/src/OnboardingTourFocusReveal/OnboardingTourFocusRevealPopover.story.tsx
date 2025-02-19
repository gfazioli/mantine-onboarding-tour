import React from 'react';
import { Button, Center, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Testimonials } from '../../../docs/demos/Testimonials';
import { focusRevealModes } from './focus-reveal-modes';
import {
  OnboardingTourFocusReveal,
  OnboardingTourFocusRevealProps,
} from './OnboardingTourFocusReveal';

export default {
  title: 'OnboardingTourFocusReveal - Popover',
  args: {
    withReveal: true,
    withOverlay: true,
    focusedMode: 'none',
  },
  argTypes: {
    withReveal: { control: { type: 'boolean' } },
    withOverlay: { control: { type: 'boolean' } },
    focusedMode: {
      control: {
        type: 'select',
      },
      options: focusRevealModes,
    },
  },
};

export function PopoverContent(props: OnboardingTourFocusRevealProps) {
  const [focused, { open, close }] = useDisclosure(false);

  const PopoverContent = () => (
    <div style={{ padding: 20 }}>
      <Title order={3}>Popover content</Title>
      <Button onClick={close}>Focus the Bottom Card</Button>
    </div>
  );

  return (
    <Stack>
      <Center>
        <Button variant="light" onClick={open}>
          Focus the Bottom Card
        </Button>
      </Center>

      <Center>
        <Title order={3}>
          By clicking the button above, the card below will be focused and revealed
        </Title>
      </Center>

      <div style={{ height: '1800px' }} />

      <Center>
        <OnboardingTourFocusReveal
          popoverContent={<PopoverContent />}
          focused={focused}
          {...props}
          onChange={(focused) => console.log('onChange ', focused)}
          onBlur={() => {
            close();
            console.log('blurred');
          }}
          onFocus={() => console.log('focused')}
          onRevealFinish={() => console.log('scroll finished')}
        >
          <Testimonials testimonial={0}>
            <Button onClick={close}>Close</Button>
          </Testimonials>
        </OnboardingTourFocusReveal>
      </Center>
    </Stack>
  );
}

export function PopoverProps(props: OnboardingTourFocusRevealProps) {
  const [focused, { open, close }] = useDisclosure(false);

  const PopoverContent = () => (
    <div style={{ padding: 20 }}>
      <Title order={3}>Popover content</Title>
      <Button onClick={close}>Focus the Bottom Card</Button>
    </div>
  );

  return (
    <Stack>
      <Center>
        <Button variant="light" onClick={open}>
          Focus the Bottom Card
        </Button>
      </Center>

      <Center>
        <Title order={3}>
          By clicking the button above, the card below will be focused and revealed
        </Title>
      </Center>

      <div style={{ height: '1800px' }} />

      <Center>
        <OnboardingTourFocusReveal
          {...props}
          popoverContent={<PopoverContent />}
          popoverProps={{ position: 'right' }}
          focused={focused}
          onChange={(focused) => console.log('onChange ', focused)}
          onBlur={() => {
            close();
            console.log('blurred');
          }}
          onFocus={() => console.log('focused')}
          onRevealFinish={() => console.log('scroll finished')}
        >
          <Testimonials testimonial={0}>
            <Button onClick={close}>Close</Button>
          </Testimonials>
        </OnboardingTourFocusReveal>
      </Center>
    </Stack>
  );
}

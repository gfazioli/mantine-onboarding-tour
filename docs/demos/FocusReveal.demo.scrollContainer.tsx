import { useRef } from 'react';
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { Testimonials } from './Testimonials';

function Wrapper() {
  const [focused, { close, open }] = useDisclosure(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollArea viewportRef={scrollRef} h={500} style={{ position: 'relative' }}>
      <Center>
        <Button onClick={open}>Reveal the Bottom Card</Button>
      </Center>

      <Divider my={400} label="Divider" />

      <Center>
        <OnboardingTour.FocusReveal
          scrollableRef={scrollRef as React.RefObject<HTMLDivElement>}
          focused={focused}
          onBlur={close}
        >
          <Testimonials testimonial={0} />
        </OnboardingTour.FocusReveal>
      </Center>
    </ScrollArea>
  );
}

const code = `
import { useRef } from 'react';
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollArea viewportRef={scrollRef} h={500} style={{ position: 'relative' }}>
      <Center>
        <Button onClick={open}>Reveal the Bottom Card</Button>
      </Center>

      <Divider my={400} label="Divider" />

      <Center>
        <OnboardingTour.FocusReveal
          scrollableRef={scrollRef as React.RefObject<HTMLDivElement>}
          focused={focused}
          onBlur={close}
        >
          <Testimonials testimonial={0} />
        </OnboardingTour.FocusReveal>
      </Center>
    </ScrollArea>
  );
}
`;

export const focusRevealScrollContainer: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};

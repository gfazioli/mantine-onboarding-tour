import { useState } from 'react';
import { FocusReveal } from '@gfazioli/mantine-focus-reveal';
import { Button, Group, Stack, Text, Title } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';
import { Testimonials, testimonials } from './Testimonials';

function Wrapper() {
  const [focusIndex, setFocusIndex] = useState(-1);
  const MAX_TESTIMONIALS = 3;

  useHotkeys([
    ['ArrowRight', () => setFocusIndex(focusIndex + 1 < MAX_TESTIMONIALS ? focusIndex + 1 : 0)],
    ['ArrowLeft', () => setFocusIndex(focusIndex - 1 >= 0 ? focusIndex - 1 : MAX_TESTIMONIALS - 1)],
  ]);

  return (
    <Stack justify="center" align="center">
      <Title order={1}>Cycle Example</Title>
      <Text fs="italic">Use the arrow keys to cycle through the testimonials</Text>
      <Button onClick={() => setFocusIndex(0)}>Start</Button>

      <Group justify="center">
        {testimonials.map(
          (testimonial, index) =>
            index < MAX_TESTIMONIALS && (
              <FocusReveal
                key={`focus-reveal-${index}`}
                focused={focusIndex === index}
                transitionProps={{ duration: 0, exitDuration: 0 }}
                onBlur={() => setFocusIndex(-1)}
                focusedMode="zoom"
              >
                <Testimonials key={`box-${index}`} testimonial={0}>
                  <Group justify="center">
                    <Button
                      size="xs"
                      variant="gradient"
                      onClick={() => setFocusIndex(index + 1 < MAX_TESTIMONIALS ? index + 1 : 0)}
                    >
                      Next
                    </Button>
                  </Group>
                </Testimonials>
              </FocusReveal>
            )
        )}
      </Group>
    </Stack>
  );
}

const code = `
import { FocusReveal } from "@gfazioli/mantine-focus-reveal";
import { Button, Group, Stack, Text, Title } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { useState } from "react";

function Demo() {
  const [focusIndex, setFocusIndex] = useState(-1);
  const MAX_TESTIMONIALS = 3;

  useHotkeys([
    [
      "ArrowRight",
      () =>
        setFocusIndex(focusIndex + 1 < MAX_TESTIMONIALS ? focusIndex + 1 : 0),
    ],
    [
      "ArrowLeft",
      () =>
        setFocusIndex(
          focusIndex - 1 >= 0 ? focusIndex - 1 : MAX_TESTIMONIALS - 1,
        ),
    ],
  ]);

  return (
    <Stack justify="center" align="center">
      <Title order={1}>Cycle Example</Title>
      <Text fs="italic">
        Use the arrow keys to cycle through the testimonials
      </Text>
      <Button onClick={() => setFocusIndex(0)}>Start</Button>

      <Group justify="center">
        {testimonials.map(
          (testimonial, index) =>
            index < MAX_TESTIMONIALS && (
              <FocusReveal
                key={\`focus-reveal-\${index}\`}
                focused={focusIndex === index}
                transitionProps={{ duration: 0, exitDuration: 0 }}
                onBlur={() => setFocusIndex(-1)}
                focusedMode="zoom"
              >
                <Testimonials key={\`box-\${index}\`} testimonial={0}>
                  <Group justify="center">
                    <Button
                      size="xs"
                      variant="gradient"
                      onClick={() =>
                        setFocusIndex(
                          index + 1 < MAX_TESTIMONIALS ? index + 1 : 0,
                        )
                      }
                    >
                      Next
                    </Button>
                  </Group>
                </Testimonials>
              </FocusReveal>
            ),
        )}
      </Group>
    </Stack>
  );
}
`;

export const cycle: MantineDemo = {
  type: 'code',
  component: Wrapper,
  code,
  defaultExpanded: false,
};

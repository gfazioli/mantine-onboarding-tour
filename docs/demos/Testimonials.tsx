import React, { forwardRef } from 'react';
import { Avatar, Button, Card, Group, Rating, Stack, Text, Title } from '@mantine/core';

const text =
  'Scroll the page 👆up or 👇down to remove the focus from the card. In practice, make this component invisible so that the onBlur event will be triggered.';

export const testimonials = [
  {
    name: 'John Doe',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png',
    text,
    rating: 4,
  },
  {
    name: 'Jane Doe',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    text,
    rating: 4,
  },
  {
    name: 'Jessica Doe',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    text,
    rating: 2,
  },
  {
    name: 'Jack Doe',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    text,
    rating: 5,
  },
  {
    name: 'Jill Doe',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    text,
    rating: 3,
  },
  {
    name: 'James Doe',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
    text,
    rating: 4,
  },
  {
    name: 'Jenny Doe',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
    text,
    rating: 5,
  },
  {
    name: 'Josh Doe',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png',
    text,
    rating: 4,
  },
  {
    name: 'Jasmine Doe',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    text,
    rating: 4,
  },
  {
    name: 'Jordan Doe',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    text,
    rating: 5,
  },
];

export const Testimonial = React.forwardRef<
  HTMLDivElement,
  {
    children?: React.ReactNode;
    avatar: string;
    name: string;
    rating: number;
    text: string;
    withButton?: boolean;
    [key: string]: any;
  }
>(({ children, avatar, name, text, rating, withButton, ...props }, ref) => {
  return (
    <Card w={200} shadow="sm" padding="lg" radius="md" withBorder ref={ref} {...props}>
      <Card.Section p="md">
        <Group>
          <Avatar size="md" radius="xl" src={avatar} />
          <Title order={4}>{name}</Title>
        </Group>
      </Card.Section>
      <Stack>
        <Text size="sm" c="dimmed">
          {text}
        </Text>
        {withButton && (
          <Button variant="outline" mt="md">
            Action
          </Button>
        )}
        {children}
        <Group justify="end">
          <Rating value={rating} />
        </Group>
      </Stack>
    </Card>
  );
});

export const Testimonials = forwardRef<
  HTMLDivElement,
  {
    testimonial: number | 'all';
    [key: string]: any;
  }
>(({ testimonial, ...props }, ref) => {
  if (testimonial === 'all') {
    return (
      <Group>
        {testimonials.map((item, index) => (
          <Testimonial key={index} {...item} />
        ))}
      </Group>
    );
  }

  return <Testimonial ref={ref} {...testimonials[testimonial]} {...props} />;
});

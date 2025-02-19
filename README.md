# Mantine FocusReveal Component

<div align="center">

  ![image](https://github.com/gfazioli/mantine-focus-reveal/assets/432181/d9d37b48-ab49-44c7-9315-4ad9a48e70f8)

</div>

---

<div align="center">
  
  [![NPM version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-focus-reveal?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-focus-reveal)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-focus-reveal?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-focus-reveal)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-focus-reveal?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-focus-reveal)
  ![NPM License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-focus-reveal?style=for-the-badge)

</div>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.

It allows you to create a focus-reveal effect with overlays, popovers, and onboarding tours, enhancing element visibility and interactivity.

You can find more components on the [Mantine Extensions Hub](https://mantine-extensions.vercel.app/) library.

## Installation

```sh
npm install @gfazioli/mantine-focus-reveal
```
or 

```sh
yarn add @gfazioli/mantine-focus-reveal
```

After installation import package styles at the root of your application:

```tsx
import '@gfazioli/mantine-focus-reveal/styles.css';
```

## Usage

```tsx
import { FocusReveal } from '@gfazioli/mantine-focus-reveal';

function Demo() {
  function BoxComponent({ children, ...props }: { children: ReactNode; [key: string]: any }) {
    return (
      <Box {...props} p="md" w="200px" c="white" style={{ borderRadius: '8px' }}>
        {children}
      </Box>
    );
  }

  return (
    <FocusReveal {...props} w={560} h={300}>
      <BoxComponent bg="red">Hello World #1</BoxComponent>
      <BoxComponent bg="cyan">Hope you like it #2</BoxComponent>
      <BoxComponent bg="blue">Have a nice day #3</BoxComponent>
      <BoxComponent bg="lime">Goodbye #4</BoxComponent>
    </FocusReveal>
  );
}
```




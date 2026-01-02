# Mantine Onboarding Tour Component

<img width="2752" height="1536" alt="mantine Onboarding Tour" src="https://github.com/user-attachments/assets/a5142ef4-d442-4404-9660-d8786803b95c" />

<div align="center">
  
  [![NPM version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-onboarding-tour?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-onboarding-tour)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-onboarding-tour?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-onboarding-tour)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-onboarding-tour?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-onboarding-tour)
  ![NPM License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-onboarding-tour?style=for-the-badge)

---

[<kbd> <br/> ❤️ If this component has been useful to you or your team, please consider becoming a sponsor <br/> </kbd>](https://github.com/sponsors/gfazioli?o=esc)  

</div>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.

[Mantine OnboardingTour](https://gfazioli.github.io/mantine-onboarding-tour/) is a flexible onboarding system for React apps built on Mantine. You declare an array of steps (OnboardingTourStep) where header, title, content, and footer can be strings, React nodes, or functions that receive the tour controller for dynamic rendering. Each step can customize focus and reveal behavior via FocusReveal props, including overlay, scroll-into-view, transitions, and popover configuration. Targets can be matched with data-onboarding-tour-id or wrapped using OnboardingTour.Target when elements live outside the tour’s children. A controller exposes current step state and actions (start, next, prev, end), while advanced hooks let you swap popover content, implement custom steppers, and tailor overlays or scroll containers for complex layouts, making product tours both accessible and highly customizable.


> [!note]
>
> → [Demo and Documentation](https://gfazioli.github.io/mantine-onboarding-tour/) → [Youtube Video](https://www.youtube.com/playlist?list=PL85tTROKkZrWyqCcmNCdWajpx05-cTal4) → [More Mantine Components](https://mantine-extensions.vercel.app/)
> 
> → [Full page Demo](https://gfazioli.github.io/mantine-onboarding-tour/demo)

## Installation

```sh
npm install @gfazioli/mantine-onboarding-tour
```

or 

```sh
yarn add @gfazioli/mantine-onboarding-tour
```

After installation import package styles at the root of your application:

```tsx
import '@gfazioli/mantine-onboarding-tour/styles.css';
```

## Usage

```tsx
import { OnboardingTour, type OnboardingTourStep } from '@gfazioli/mantine-onboarding-tour';

function Demo() {

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to the Onboarding Tour Component',
      content:
        'This is a demo of the Onboarding Tour component, which allows to create onboarding experiences for your users.',
    },
    {
      id: 'my-button',
      title: 'Features',
      content: 'You can select any component by using the `data-onboarding-tour-id` attribute',
    },

  ];

  return (
    <OnboardingTour tour={onboardingSteps} started={started}>
      <Title data-onboarding-tour-id="welcome" order={4}>
        A simple example of the Onboarding Tour component
      </Title>
      <Button data-onboarding-tour-id="my-button">See all testimonials</Button>
    </OnboardingTour>
  );
}
```
## Sponsor

<div align="center">

[<kbd> <br/> ❤️ If this component has been useful to you or your team, please consider becoming a sponsor <br/> </kbd>](https://github.com/sponsors/gfazioli?o=esc)

</div>

Your support helps me:

- Keep the project actively maintained with timely bug fixes and security updates 	
- Add new features, improve performance, and refine the developer experience 	
- Expand test coverage and documentation for smoother adoption 	
- Ensure long‑term sustainability without relying on ad hoc free time 	
- Prioritize community requests and roadmap items that matter most

Open source thrives when those who benefit can give back—even a small monthly contribution makes a real difference. Sponsorships help cover maintenance time, infrastructure, and the countless invisible tasks that keep a project healthy.

Your help truly matters.

💚 [Become a sponsor](https://github.com/sponsors/gfazioli?o=esc) today and help me keep this project reliable, up‑to‑date, and growing for everyone.
---
https://github.com/user-attachments/assets/93d39052-90be-45d7-a470-67f8727bc096

---  
[![Star History Chart](https://api.star-history.com/svg?repos=gfazioli/mantine-onboarding-tour&type=Timeline)](https://www.star-history.com/#gfazioli/mantine-onboarding-tour&Timeline)


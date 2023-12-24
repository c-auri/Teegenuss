# Projekt Teegenuss
This is my personal website that I use to share imported tea samples from overseas. It's currently in a working state, but undergoing construction.

- Production deployment: [projekt-teegenuss.de](https://projekt-teegenuss.de)
- Development deployment: [new-teegenuss.netlify.app](https://new-teegenuss.netlify.app/)

Some designs ideas can be found on [Figma](https://www.figma.com/proto/TDuz9f4zXzVkXuKgXyvFPJ/Teegenuss?node-id=335-1908).

## Tech Stack
The current site is built with [Astro](https://astro.build/) as a static site generator in addition to React and Tailwind.

Currently, the site is front-end only, but Astro has the ability to add server-side rendering in the future. There are other alternatives that would be worth considering (for example SvelteKit or NextJS) for that. But those lock me into a specific frontend framework, so I'm not sure I would ever want to switch to them even if I require SSR.

I use React and Tailwind mostly because they allow me to get something working quickly, as I already know how to use them at least on a basic level. But I do consider making the switch to a more lightweight JavaScript framework, like Preact or Svelte, and to write my own utlity classes using a CSS precompiler like SCSS to get a more custom look. But at this point it's  all just ideas and no real plans exist for it yet.
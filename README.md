# Projekt Teegenuss
This is my personal website that I use to share imported tea samples from overseas. It's currently undergoing a rewrite. 

- Production deployment: [projekt-teegenuss.de](https://projekt-teegenuss.de)
- Development deployment: [new-teegenuss.netlify.app](https://new-teegenuss.netlify.app/)

Some of the designs for the new site can be found on [Figma](https://www.figma.com/proto/TDuz9f4zXzVkXuKgXyvFPJ/Teegenuss?node-id=335-1908).

## Reasons for the rewrite
I designed and implemented the site at the start of 2022, when I was still a beginner at front end development. I learned a lot since then and would do many things differently now. For example, I used [Jekyll](https://jekyllrb.com/) as a static site generator, which proved to be quite a limiting factor and resulted in some messy workarounds. I also didn't use any JavaScript framework so the interactive components are hard to maintain. Instead of cleaning up the site I have, I opted for rewriting it using [Astro](https://astro.build/) as an SSG in addition to React and Tailwind.

## Outlook
Astro has already proven to be more suited to my needs than Jekyll was, so I am happy with that decision. It also has the ability to add server-side rendering, so I think I should be set even if the scope of the site should grow in the future. There might be other alternatives that would be worth considering (for example SvelteKit or NextJS) should it ever come to that. But those lock my into a specific frontend framework, so I'm not sure I would ever want to switch to them even if I require SSR.

Currently, I am using Tailwind to get something working quickly. But after the initial release of the new site I plan on slowly migrating to self-made SCSS utility classes mixed with the scoped styles provided by Astro. I feel that this will give more flexibility than relying on Tailwinds utility classes only. I am also unsure whether to keep React as a JS framework for the long term or replace it with something more lightweight.
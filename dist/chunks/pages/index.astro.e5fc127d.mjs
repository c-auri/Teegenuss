import { b as createAstro, d as createComponent, r as renderTemplate, e as renderHead, h as addAttribute } from '../astro.4f996e06.mjs';
import { g as getCollection } from './_...tea_.astro.44f2750a.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const teas = await getCollection("teas");
  return renderTemplate`<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
  ${renderHead()}</head>
  <body>
    <a href="/">Projekt Teegenuss</a>
    <ul>
    ${teas.map((tea) => renderTemplate`<li><a${addAttribute(tea.slug, "href")}>${tea.data.title}</a></li>`)}
    </ul>
  </body>
</html>`;
}, "/home/cauri/Projects/Teegenuss/src/pages/index.astro");

const $$file = "/home/cauri/Projects/Teegenuss/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };

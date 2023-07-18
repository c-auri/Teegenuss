import { i as createVNode, F as Fragment, j as spreadAttributes } from './astro.4f996e06.mjs';
import '@astrojs/internal-helpers/path';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Ein mitteldunkler Oolong mit traditioneller Holzkohleröstung. Süße Honignoten verbinden sich mit deutlichen Röstnoten und erinnern stellenweise an Karamellbonbons.</p>");

				const frontmatter = {"slug":"taiwan-einstieg/traditional-roast-jin-xuan","title":"Kohle-gerösteter QX","shop":"Taiwan Tea Crafts","shopUrl":"https://www.taiwanteacrafts.com/product/high-mountain-charcoal-pit-fired-oolong-tea","amount":"12&hairsp;g","price":0.25,"currency":"$"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/22-1/05-Traditional-Charcoal-Roast.md";
				const url = undefined;
				function rawContent() {
					return "Ein mitteldunkler Oolong mit traditioneller Holzkohleröstung. Süße Honignoten verbinden sich mit deutlichen Röstnoten und erinnern stellenweise an Karamellbonbons.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };

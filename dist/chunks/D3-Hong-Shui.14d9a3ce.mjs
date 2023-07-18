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

				const html = updateImageReferences("<p>Ein günstiger Oolong mit starker Fruchtnote. Geignet für die Zubereitung im Gaiwan, dabei aber nicht so ergiebig. Im Grandpa Style wird die Frucht stark betont, was dem Tee sehr in die Karten spielt.</p>");

				const frontmatter = {"slug":"dunkles-taiwan/hong-shui","title":"Hong Shui","shop":"Taiwan Tea Crafts","shopUrl":"https://www.taiwanteacrafts.com/product/organic-red-spring-hong-shui-oolong-tea/?attribute_pa_weight=250-g-8-82-oz-save-20&v=3a52f3c22ed6","amount":"12&hairsp;g","price":0.11,"currency":"$"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/22-2/D3-Hong-Shui.md";
				const url = undefined;
				function rawContent() {
					return "Ein günstiger Oolong mit starker Fruchtnote. Geignet für die Zubereitung im Gaiwan, dabei aber nicht so ergiebig. Im Grandpa Style wird die Frucht stark betont, was dem Tee sehr in die Karten spielt.";
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

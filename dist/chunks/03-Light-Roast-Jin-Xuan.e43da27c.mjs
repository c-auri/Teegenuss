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

				const html = updateImageReferences("<p>Die minimale Röstung gibt diesem ansonsten sehr grünen Oolong eine leichte Nussigkeit und macht ihn robuster in der Zubereitung. Weniger herb und damit etwas bekömmlicher als ungeröstete grüne Oolongs.</p>");

				const frontmatter = {"slug":"taiwan-einstieg/light-roast-jin-xuan","title":"Leicht gerösteter JX","shop":"Taiwan Tea Crafts","shopUrl":"https://www.taiwanteacrafts.com/product/organic-jin-xuan-oolong-tea","amount":"12&hairsp;g","price":0.16,"currency":"$"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/22-1/03-Light-Roast-Jin-Xuan.md";
				const url = undefined;
				function rawContent() {
					return "Die minimale Röstung gibt diesem ansonsten sehr grünen Oolong eine leichte Nussigkeit und macht ihn robuster in der Zubereitung. Weniger herb und damit etwas bekömmlicher als ungeröstete grüne Oolongs.";
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

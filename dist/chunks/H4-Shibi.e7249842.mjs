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

				const html = updateImageReferences("<p>Leichter und spritziger im Geschmack als der Meishan Jin Xuan. Für diesen Preis ein guter Einstieg in Qing Xin Gaoshans.</p>");

				const frontmatter = {"slug":"helles-taiwan/shibi","title":"Shibi","shop":"Taiwan Tea Crafts","shopUrl":"https://www.taiwanteacrafts.com/product/shibi-high-mountain-spring-oolong-tea/?v=3a52f3c22ed6","amount":"12&hairsp;g","price":0.25,"currency":"$"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/22-2/H4-Shibi.md";
				const url = undefined;
				function rawContent() {
					return "Leichter und spritziger im Geschmack als der Meishan Jin Xuan. Für diesen Preis ein guter Einstieg in Qing Xin Gaoshans.";
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

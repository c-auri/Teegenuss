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

				const html = updateImageReferences("<p>Bei diesem dunklen Oolong vereint sich der blumige Grundcharakter des Tie Guan Yin mit warmen, nussigen Geschmacksnoten und einer an Karamell erinnernden Süße.</p>");

				const frontmatter = {"slug":"chinas-schaetze/hearth-tgy","title":"Hearth TGY","shop":"white2tea","shopUrl":"https://white2tea.com/collections/oolong-tea/products/hearth-tieguanyin","amount":"12&hairsp;g","price":0.31,"currency":"€"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/23-1/05-Hearth-TGY.md";
				const url = undefined;
				function rawContent() {
					return "Bei diesem dunklen Oolong vereint sich der blumige Grundcharakter des Tie Guan Yin mit warmen, nussigen Geschmacksnoten und einer an Karamell erinnernden Süße.";
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

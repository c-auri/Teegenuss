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

				const html = updateImageReferences("<p>Wegen der dicht gepressten Kugelform ist dieser Tee anfangs täuschend sanft. Doch wenn sich die Blätter öffnen, zeigt sich sein kräftiger Charakter. Erinnert geschmacklich an eine Pilzbrühe, was beim Auskochen der aufgegangenen Blätter noch verstärkt wird.</p>");

				const frontmatter = {"slug":"chinas-schaetze/2020-shou-mei","title":"2020 Shou Mei","shop":"Teewald","shopUrl":"https://teewald.de/collections/weisser-tee/products/2020-shoumei-weisser-tee-perle","amount":"2x8&hairsp;g","price":0.17,"currency":"€"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/23-1/03-2020-Shou-Mei.md";
				const url = undefined;
				function rawContent() {
					return "Wegen der dicht gepressten Kugelform ist dieser Tee anfangs täuschend sanft. Doch wenn sich die Blätter öffnen, zeigt sich sein kräftiger Charakter. Erinnert geschmacklich an eine Pilzbrühe, was beim Auskochen der aufgegangenen Blätter noch verstärkt wird.";
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

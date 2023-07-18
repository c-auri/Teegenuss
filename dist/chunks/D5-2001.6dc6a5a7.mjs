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

				const html = updateImageReferences("<p>Besonders dunkle Oolongs wie dieser eignen sich für eine langjährige Reifung, bei der die Röstnoten abgebaut werden und ein charakteristischer Altersgeschmack entsteht. Hier handelt es sich um Reste verschiedener Ernten aus unterschiedlichen Höhenlagen, die mittlerweile über 20 Jahre nachgereift wurden.</p>");

				const frontmatter = {"slug":"dunkles-taiwan/2001","title":"2001 Family Reserve","shop":"Taiwan Tea Crafts","shopUrl":"https://www.taiwanteacrafts.com/product/2001-family-reserve-aged-oolong-tea-lot-578/?attribute_pa_weight=250-g-8-82-oz&v=3a52f3c22ed6","amount":"12&hairsp;g","price":0.34,"currency":"$"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/22-2/D5-2001.md";
				const url = undefined;
				function rawContent() {
					return "Besonders dunkle Oolongs wie dieser eignen sich für eine langjährige Reifung, bei der die Röstnoten abgebaut werden und ein charakteristischer Altersgeschmack entsteht. Hier handelt es sich um Reste verschiedener Ernten aus unterschiedlichen Höhenlagen, die mittlerweile über 20 Jahre nachgereift wurden.";
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

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

				const html = updateImageReferences("<p>Ein günstiger Long Jing mit der klassischen Nadelform und dem charakteristisch nussigem Kastanienaroma. Sehr guter Tee für den Preis, kann jedoch bitter werden wenn er zu stark zubereitet wird.</p>");

				const frontmatter = {"slug":"chinas-schaetze/long-jing","title":"Long Jing","shop":"Paper & Tea","shopUrl":"https://www.paperandtea.com/collections/green-tea/products/imperial-dragon-n-302?variant=31685522423879","amount":"12&hairsp;g","price":0.1,"currency":"€"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/23-1/01-Long-Jing.md";
				const url = undefined;
				function rawContent() {
					return "Ein günstiger Long Jing mit der klassischen Nadelform und dem charakteristisch nussigem Kastanienaroma. Sehr guter Tee für den Preis, kann jedoch bitter werden wenn er zu stark zubereitet wird.";
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

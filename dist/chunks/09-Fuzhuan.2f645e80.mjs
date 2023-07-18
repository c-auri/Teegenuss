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

				const html = updateImageReferences("<p>Ein vollmundiger Heicha aus Hunan, der nur wenige goldene Blumen aufweist. Hinter dem typisch erdigen Körper versteckt sich eine sehr angenehme Süße und ein angenehmer, leicht fruchtiger Nachgeschmack. Kann auch ausgekocht werden.</p>");

				const frontmatter = {"slug":"chinas-schaetze/fuzhuan","title":"Fuzhuan","shop":"Teewald","shopUrl":"https://teewald.de/products/anhua-heicha","amount":"12&hairsp;g","price":0.29,"currency":"€"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/23-1/09-Fuzhuan.md";
				const url = undefined;
				function rawContent() {
					return "Ein vollmundiger Heicha aus Hunan, der nur wenige goldene Blumen aufweist. Hinter dem typisch erdigen Körper versteckt sich eine sehr angenehme Süße und ein angenehmer, leicht fruchtiger Nachgeschmack. Kann auch ausgekocht werden.";
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

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

				const html = updateImageReferences("<p>Ein solider Jin Xuan Gaoshan der die charakteristische Milchigkeit und den vollmundigen Charakter der Strauchsorte zeigt. Und das für einen echten Schnäppchenpreis.</p>");

				const frontmatter = {"slug":"helles-taiwan/meishan","title":"Meishan","shop":"Taiwan Tea Crafts","shopUrl":"https://www.taiwanteacrafts.com/product/organic-meishan-jin-xuan-high-mountain-spring-oolong-tea/?attribute_pa_weight=250-g-8-82-oz-save-20&v=3a52f3c22ed6","amount":"12&hairsp;g","price":0.12,"currency":"$"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/22-2/H3-Meishan.md";
				const url = undefined;
				function rawContent() {
					return "Ein solider Jin Xuan Gaoshan der die charakteristische Milchigkeit und den vollmundigen Charakter der Strauchsorte zeigt. Und das für einen echten Schnäppchenpreis.";
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

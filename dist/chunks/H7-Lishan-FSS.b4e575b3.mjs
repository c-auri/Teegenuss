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

				const html = updateImageReferences("<p>Dieser Tee möchte sich mit dem Namen Fushoushan schmücken, stammt aber nicht direkt aus dem berühmten Garten. Es handelt sich viel mehr um Tee einer benachbarten Plantage, weswegen ich mich dagegen entschieden habe den Namen so vom Händler zu übernehmen. Trotzdem natürlich ein Tee aus exzellenter Lage.</p>");

				const frontmatter = {"slug":"helles-taiwan/lishan-ffs","title":"Lishan FSS","shop":"Taiwan Tea Crafts","shopUrl":"https://www.taiwanteacrafts.com/product/fushoushan-high-mountain-spring-oolong-tea/?v=3a52f3c22ed6","amount":"12&hairsp;g","price":0.39,"currency":"$"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/22-2/H7-Lishan-FSS.md";
				const url = undefined;
				function rawContent() {
					return "Dieser Tee möchte sich mit dem Namen Fushoushan schmücken, stammt aber nicht direkt aus dem berühmten Garten. Es handelt sich viel mehr um Tee einer benachbarten Plantage, weswegen ich mich dagegen entschieden habe den Namen so vom Händler zu übernehmen. Trotzdem natürlich ein Tee aus exzellenter Lage.";
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

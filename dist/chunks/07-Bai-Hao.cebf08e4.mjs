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

				const html = updateImageReferences("<p>Eine günstige Version des beliebten Eastern Beauties. Aufgrund des Preises ist davon auszugehen, dass er nicht von Käfern gebissen wurde. Dennoch ein bemerkenswert vielschichtiger Tee der seinen Preis wert ist.</p>");

				const frontmatter = {"slug":"taiwan-einstieg/bai-hao","title":"Bai Hao","shop":"Taiwan Tea Crafts","shopUrl":"https://www.taiwanteacrafts.com/product/oriental-beauty-superior-grade-oolong-tea","amount":"12&hairsp;g","price":0.29,"currency":"$"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/22-1/07-Bai-Hao.md";
				const url = undefined;
				function rawContent() {
					return "Eine günstige Version des beliebten Eastern Beauties. Aufgrund des Preises ist davon auszugehen, dass er nicht von Käfern gebissen wurde. Dennoch ein bemerkenswert vielschichtiger Tee der seinen Preis wert ist.";
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

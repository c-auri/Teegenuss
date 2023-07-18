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

				const html = updateImageReferences("<p>Erinnert optisch an grünen Tee, aufgrund seiner Milchigkeit ist es aber zweifellos ein Oolong. Geschmacklich wenig überraschend und eher eindimensional, trotzdem eine überraschend gute Qualität für diesen niedrigen Preis.</p>");

				const frontmatter = {"slug":"taiwan-einstieg/bao-zhong","title":"Bao Zhong","shop":"Taiwan Tea Crafts","shopUrl":"https://www.taiwanteacrafts.com/product/baguashan-spring-bao-zhong-tea/","amount":"12&hairsp;g","price":0.11,"currency":"$"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/22-1/01-Bao-Zhong.md";
				const url = undefined;
				function rawContent() {
					return "Erinnert optisch an grünen Tee, aufgrund seiner Milchigkeit ist es aber zweifellos ein Oolong. Geschmacklich wenig überraschend und eher eindimensional, trotzdem eine überraschend gute Qualität für diesen niedrigen Preis.";
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

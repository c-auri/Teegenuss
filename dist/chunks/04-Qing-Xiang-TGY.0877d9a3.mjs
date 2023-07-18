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

				const html = updateImageReferences("<p>Dieser frische Tie Guan Yin aus Anxi ist der Inbegriff eines modernen grünen Oolongs. Das sehr blumige Aroma und die deutliche Säure im Geschmack ergeben einen erfrischenden Tee, der wie gemacht ist für warme Tage.</p>");

				const frontmatter = {"slug":"chinas-schaetze/qing-xiang-tgy","title":"Qing Xiang TGY","shop":"Nannuoshan","shopUrl":"https://www.nannuoshan.org/collections/oolong-tea/products/qing-xiang-tieguanyin-2022?variant=43506658738443","amount":"12&hairsp;g","price":0.24,"currency":"€"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/23-1/04-Qing-Xiang-TGY.md";
				const url = undefined;
				function rawContent() {
					return "Dieser frische Tie Guan Yin aus Anxi ist der Inbegriff eines modernen grünen Oolongs. Das sehr blumige Aroma und die deutliche Säure im Geschmack ergeben einen erfrischenden Tee, der wie gemacht ist für warme Tage.";
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

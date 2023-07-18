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

				const html = updateImageReferences("<p>Bei diesem über Holzkohle gerösteten Oolong ist die blumige Strauchsorte wegen der starken Röstung fast nicht wieder zu erkennen. Der Tee bewegt sich auf einem schmalen Grat und wirkt stellenweise fast verbrannt. Nicht für jedermann. Wer stark geröstete Tees mag, wird hier aber nicht enttäuscht werden.</p>");

				const frontmatter = {"slug":"chinas-schaetze/canton-canon-tgy","title":"Canton Canon TGY","shop":"white2tea","shopUrl":"https://white2tea.com/products/canton-canon?variant=43599182692580","amount":"12&hairsp;g","price":0.29,"currency":"€"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/23-1/06-Canton-Canon-TGY.md";
				const url = undefined;
				function rawContent() {
					return "Bei diesem über Holzkohle gerösteten Oolong ist die blumige Strauchsorte wegen der starken Röstung fast nicht wieder zu erkennen. Der Tee bewegt sich auf einem schmalen Grat und wirkt stellenweise fast verbrannt. Nicht für jedermann. Wer stark geröstete Tees mag, wird hier aber nicht enttäuscht werden.";
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

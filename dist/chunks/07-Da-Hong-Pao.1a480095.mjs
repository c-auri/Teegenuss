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

				const html = updateImageReferences("<p>Ein klassischer Felsentee aus Wuyi. Im Vordergrund steht eine kräftige Röstung, die trotz ihrer Intensität bemerkenswert geschmeidig ist. Dahinter verbergen sich leicht florale Noten und das charakteristisch mineralische Mundgefühl.</p>");

				const frontmatter = {"slug":"chinas-schaetze/da-hong-pao","title":"Da Hong Pao","shop":"Wuyi Origin","shopUrl":"https://www.wuyiorigin.com/collections/2020-wuyi-ming-cong/products/da-hong-pao-blended-%E6%8B%BC%E9%85%8D%E5%A4%A7%E7%BA%A2%E8%A2%8D-2022?variant=40074178756696","amount":"12&hairsp;g","price":0.41,"currency":"€"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/23-1/07-Da-Hong-Pao.md";
				const url = undefined;
				function rawContent() {
					return "Ein klassischer Felsentee aus Wuyi. Im Vordergrund steht eine kräftige Röstung, die trotz ihrer Intensität bemerkenswert geschmeidig ist. Dahinter verbergen sich leicht florale Noten und das charakteristisch mineralische Mundgefühl.";
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

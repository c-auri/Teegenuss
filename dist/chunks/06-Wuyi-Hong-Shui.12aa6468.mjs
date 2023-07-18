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

				const html = updateImageReferences("<p>Diese althergebrachte Strauchsorte aus dem Wuyi in China eignet sich hervorragend für den als Hong Shui (“Rotes Wasser”) bezeichneten Oolongstil mit höherer Oxidation. Ein wärmend-nussiger Tee mit einer starken Röstnote, allerdings etwas heller als die meisten Felsentees aus China.</p>");

				const frontmatter = {"slug":"taiwan-einstieg/wuyi","title":"Wuyi Hong Shui","shop":"Taiwan Tea Crafts","shopUrl":"https://www.taiwanteacrafts.com/product/wuyi-hong-shui-high-mountain-oolong-tea","amount":"12&hairsp;g","price":0.24,"currency":"$"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/22-1/06-Wuyi-Hong-Shui.md";
				const url = undefined;
				function rawContent() {
					return "Diese althergebrachte Strauchsorte aus dem Wuyi in China eignet sich hervorragend für den als Hong Shui (\"Rotes Wasser\") bezeichneten Oolongstil mit höherer Oxidation. Ein wärmend-nussiger Tee mit einer starken Röstnote, allerdings etwas heller als die meisten Felsentees aus China.";
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

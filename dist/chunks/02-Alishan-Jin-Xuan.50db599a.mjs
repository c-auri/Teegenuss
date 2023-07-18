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

				const html = updateImageReferences("<p>Ein moderner, grüner Oolong aus dem Alishan mit einem betörenden Blütenduft und der für die Strauchsorte typischen starken Milchigkeit. Aufgrund der geringen Oxidation ist er temperaturanfällig und wird leicht grasig herb.</p>");

				const frontmatter = {"slug":"taiwan-einstieg/alishan-jin-xuan","title":"Alishan Jin&nbsp;Xuan","shop":"Taiwan Tea Crafts","shopUrl":"https://www.taiwanteacrafts.com/product/alishan-jin-xuan-high-mountain-oolong-tea","amount":"12&hairsp;g","price":0.22,"currency":"$"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/22-1/02-Alishan-Jin-Xuan.md";
				const url = undefined;
				function rawContent() {
					return "Ein moderner, grüner Oolong aus dem Alishan mit einem betörenden Blütenduft und der für die Strauchsorte typischen starken Milchigkeit. Aufgrund der geringen Oxidation ist er temperaturanfällig und wird leicht grasig herb.";
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

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

				const html = updateImageReferences("<p>Anders als die bekannteren geräucherten Vertreter derselben Sorte ist dieser Lapsang Souchong ein bemerkenswert sanfter Schwarztee. Über die typisch schokoladigen Basisnoten legt sich das zarte Aroma von Rosenblüten und eine fruchtige Süße.</p>");

				const frontmatter = {"slug":"chinas-schaetze/lapsang-souchong","title":"Lapsang Souchong","shop":"Wuyi Origin","shopUrl":"https://www.wuyiorigin.com/collections/wuyi-black/products/wild-lapsang-souchong-%E9%87%8E%E7%94%9F%E5%B0%8F%E7%A7%8D2022?variant=39907726131288","amount":"12&hairsp;g","price":0.25,"currency":"€"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/23-1/08-Lapsang-Souchong.md";
				const url = undefined;
				function rawContent() {
					return "Anders als die bekannteren geräucherten Vertreter derselben Sorte ist dieser Lapsang Souchong ein bemerkenswert sanfter Schwarztee. Über die typisch schokoladigen Basisnoten legt sich das zarte Aroma von Rosenblüten und eine fruchtige Süße.";
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

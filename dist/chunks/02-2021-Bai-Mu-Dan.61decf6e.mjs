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

				const html = updateImageReferences("<p>Ein vielseitiger Baimudan aus Fuding mit leicht fortgeschrittenem Reifegrad. Vorsichtig zubereitet zeigt sich die zurückhaltende Blumigkeit des weißen Tees mit einer sanften, honigartigen Süße. Wird er kräftiger gebrüht legen sich jedoch kräftigere Gewürznoten darüber.</p>");

				const frontmatter = {"slug":"chinas-schaetze/bai-mu-dan","title":"2021 Bai Mu Dan","shop":"Teewald","shopUrl":"https://teewald.de/collections/weisser-tee/products/2021-pai-mu-tan-teekuchen","amount":"12&hairsp;g","price":0.28,"currency":"€"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/23-1/02-2021-Bai-Mu-Dan.md";
				const url = undefined;
				function rawContent() {
					return "Ein vielseitiger Baimudan aus Fuding mit leicht fortgeschrittenem Reifegrad. Vorsichtig zubereitet zeigt sich die zurückhaltende Blumigkeit des weißen Tees mit einer sanften, honigartigen Süße. Wird er kräftiger gebrüht legen sich jedoch kräftigere Gewürznoten darüber.";
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

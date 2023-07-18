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

				const html = updateImageReferences("<p>Eine modern interpretierter Dong Ding mit nur sehr geringer Oxidation. Dank der Röstung kann er stärker zubereitet werden als grüne Oolongs. Dann zeigen sich kräftig würzige Noten. Bei schonenden Temperaturen zeigt sich der Tee hingegen von seiner blumig frischen Seite und offenbart seinen süßen Grundcharakter.</p>");

				const frontmatter = {"slug":"dunkles-taiwan/dong-ding","title":"Dong Ding","shop":"Taiwan Tea Crafts","shopUrl":"https://www.taiwanteacrafts.com/product/dong-ding-high-mountain-heritage-oolong-tea/?attribute_pa_weight=250-g-8-82-oz-save-20&v=3a52f3c22ed6","amount":"12&hairsp;g","price":0.19,"currency":"$"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/22-2/D1-Dong-Ding.md";
				const url = undefined;
				function rawContent() {
					return "Eine modern interpretierter Dong Ding mit nur sehr geringer Oxidation. Dank der Röstung kann er stärker zubereitet werden als grüne Oolongs. Dann zeigen sich kräftig würzige Noten. Bei schonenden Temperaturen zeigt sich der Tee hingegen von seiner blumig frischen Seite und offenbart seinen süßen Grundcharakter.";
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

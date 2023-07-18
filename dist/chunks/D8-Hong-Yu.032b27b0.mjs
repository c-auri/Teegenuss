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

				const html = updateImageReferences("<p>Die natürliche Eukalyptusnote dieser Strauchsorte verbindet sich mit der Fruchtigkeit des schwarzen Tees und ergibt ein sehr außergewöhnliches Aroma. Großblättrige Schwarztees wie dieser hier können leicht zu intensiv werden, wenn man sie zu sehr fordet. Vorsichtig zubereitet rückt das besondere Aroma aber auch im Geschmack spürbar in den Vordergrund.</p>");

				const frontmatter = {"slug":"dunkles-taiwan/hong-yu","title":"Hong Yu","shop":"Taiwan Tea Crafts","shopUrl":"https://www.taiwanteacrafts.com/product/red-jade-black-tea/?attribute_pa_weight=250-g-8-82-oz-save-20&v=3a52f3c22ed6","amount":"12&hairsp;g","price":0.31,"currency":"$"};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/22-2/D8-Hong-Yu.md";
				const url = undefined;
				function rawContent() {
					return "Die natürliche Eukalyptusnote dieser Strauchsorte verbindet sich mit der Fruchtigkeit des schwarzen Tees und ergibt ein sehr außergewöhnliches Aroma. Großblättrige Schwarztees wie dieser hier können leicht zu intensiv werden, wenn man sie zu sehr fordet. Vorsichtig zubereitet rückt das besondere Aroma aber auch im Geschmack spürbar in den Vordergrund.";
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

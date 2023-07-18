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

				const html = updateImageReferences("<p>Ein Oolong auf der helleren Seite, der durch seine leichte Holzkohleröstung an Komplexität gewinnt. Zur leichten Milchigkeit und den grünen Aromen kommen sanfte Röstnoten und eine leichte Nussigkeit.</p>");

				const frontmatter = {"slug":"taiwan-einstieg/light-charcoal-roast-jin-xuan","title":"Kohle-gerösteter JX","shop":"Taiwan Tea Crafts","shopUrl":"https://www.taiwanteacrafts.com/product/organic-jin-xuan-light-charcoal-pit-fired-oolong-tea","amount":"12&hairsp;g","price":0.22,"currency":"$","type":"Oolong","variety":"Jin Xuan","origin":[["Land","Taiwan"],["Region","Zhushan"],["Höhe","400"]],"production":[["Ernte","Oktober 2019"],["Pflückung","handgepflückt"],["Oxidation","leicht"],["Röstung","leicht"],["Röstmethode","Holzkohleröstung"]],"gongfu-temperature":95,"gongfu-amount":[["Gewicht","5&hairsp;-&hairsp;6"],["oder Volumen","bis der Gefäßboden bedeckt ist"]],"gongfu-times":[["Abguss","blitz"],["Anfangs","10 Sekunden"],["bis","bis die Blätter geöffnet sind"],["Später","+&hairsp;10 Sekunden"]],"tags":["jin-xuan"]};
				const file = "/home/cauri/Projects/Teegenuss/src/content/teas/22-1/04-Light-Charcoal-Roast.md";
				const url = undefined;
				function rawContent() {
					return "Ein Oolong auf der helleren Seite, der durch seine leichte Holzkohleröstung an Komplexität gewinnt. Zur leichten Milchigkeit und den grünen Aromen kommen sanfte Röstnoten und eine leichte Nussigkeit.";
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

import { c as createCollectionToGlobResultMap, a as createGetCollection, b as createAstro, d as createComponent, r as renderTemplate, e as renderHead, f as renderSlot, g as renderComponent, m as maybeRenderHead } from '../astro.4f996e06.mjs';

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/teas/22-1/01-Bao-Zhong.md": () => import('../01-Bao-Zhong.d6c42800.mjs'),"/src/content/teas/22-1/02-Alishan-Jin-Xuan.md": () => import('../02-Alishan-Jin-Xuan.b8232cee.mjs'),"/src/content/teas/22-1/03-Light-Roast-Jin-Xuan.md": () => import('../03-Light-Roast-Jin-Xuan.4a56090a.mjs'),"/src/content/teas/22-1/04-Light-Charcoal-Roast.md": () => import('../04-Light-Charcoal-Roast.7ea55588.mjs'),"/src/content/teas/22-1/05-Traditional-Charcoal-Roast.md": () => import('../05-Traditional-Charcoal-Roast.05bf0428.mjs'),"/src/content/teas/22-1/06-Wuyi-Hong-Shui.md": () => import('../06-Wuyi-Hong-Shui.18ea514a.mjs'),"/src/content/teas/22-1/07-Bai-Hao.md": () => import('../07-Bai-Hao.3ff22d76.mjs'),"/src/content/teas/22-2/D1-Dong-Ding.md": () => import('../D1-Dong-Ding.1587e8fe.mjs'),"/src/content/teas/22-2/D2-Tie-Guan-Yin.md": () => import('../D2-Tie-Guan-Yin.4736776f.mjs'),"/src/content/teas/22-2/D3-Hong-Shui.md": () => import('../D3-Hong-Shui.bfa2780e.mjs'),"/src/content/teas/22-2/D4-GABA.md": () => import('../D4-GABA.cbdc3185.mjs'),"/src/content/teas/22-2/D5-2001.md": () => import('../D5-2001.48aefaf4.mjs'),"/src/content/teas/22-2/D6-Eastern-Beauty.md": () => import('../D6-Eastern-Beauty.cef8317d.mjs'),"/src/content/teas/22-2/D7-Mi-Xiang.md": () => import('../D7-Mi-Xiang.bfdde311.mjs'),"/src/content/teas/22-2/D8-Hong-Yu.md": () => import('../D8-Hong-Yu.c726ecf0.mjs'),"/src/content/teas/22-2/H1-Bi-Luo-Chun.md": () => import('../H1-Bi-Luo-Chun.fc1b80ec.mjs'),"/src/content/teas/22-2/H2-Long-Jing.md": () => import('../H2-Long-Jing.febbaa43.mjs'),"/src/content/teas/22-2/H3-Meishan.md": () => import('../H3-Meishan.7c8f57de.mjs'),"/src/content/teas/22-2/H4-Shibi.md": () => import('../H4-Shibi.0bac71e5.mjs'),"/src/content/teas/22-2/H5-Longfengxia.md": () => import('../H5-Longfengxia.de942960.mjs'),"/src/content/teas/22-2/H6-Cui-Luan.md": () => import('../H6-Cui-Luan.b32328df.mjs'),"/src/content/teas/22-2/H7-Lishan-FSS.md": () => import('../H7-Lishan-FSS.a71f4af0.mjs'),"/src/content/teas/22-2/H8-Lishan-88K.md": () => import('../H8-Lishan-88K.1318e433.mjs'),"/src/content/teas/23-1/01-Long-Jing.md": () => import('../01-Long-Jing.5e6f5c0a.mjs'),"/src/content/teas/23-1/02-2021-Bai-Mu-Dan.md": () => import('../02-2021-Bai-Mu-Dan.ccca65e7.mjs'),"/src/content/teas/23-1/03-2020-Shou-Mei.md": () => import('../03-2020-Shou-Mei.b74ad92b.mjs'),"/src/content/teas/23-1/04-Qing-Xiang-TGY.md": () => import('../04-Qing-Xiang-TGY.7f9569c1.mjs'),"/src/content/teas/23-1/05-Hearth-TGY.md": () => import('../05-Hearth-TGY.7ae7a694.mjs'),"/src/content/teas/23-1/06-Canton-Canon-TGY.md": () => import('../06-Canton-Canon-TGY.9bbc8e7b.mjs'),"/src/content/teas/23-1/07-Da-Hong-Pao.md": () => import('../07-Da-Hong-Pao.040cbb22.mjs'),"/src/content/teas/23-1/08-Lapsang-Souchong.md": () => import('../08-Lapsang-Souchong.44769591.mjs'),"/src/content/teas/23-1/09-Fuzhuan.md": () => import('../09-Fuzhuan.bed4965a.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"teas":{"type":"content","entries":{"taiwan-einstieg/bao-zhong":"/src/content/teas/22-1/01-Bao-Zhong.md","taiwan-einstieg/alishan-jin-xuan":"/src/content/teas/22-1/02-Alishan-Jin-Xuan.md","taiwan-einstieg/light-roast-jin-xuan":"/src/content/teas/22-1/03-Light-Roast-Jin-Xuan.md","taiwan-einstieg/light-charcoal-roast-jin-xuan":"/src/content/teas/22-1/04-Light-Charcoal-Roast.md","taiwan-einstieg/traditional-roast-jin-xuan":"/src/content/teas/22-1/05-Traditional-Charcoal-Roast.md","taiwan-einstieg/wuyi":"/src/content/teas/22-1/06-Wuyi-Hong-Shui.md","taiwan-einstieg/bai-hao":"/src/content/teas/22-1/07-Bai-Hao.md","dunkles-taiwan/dong-ding":"/src/content/teas/22-2/D1-Dong-Ding.md","dunkles-taiwan/tie-guan-yin":"/src/content/teas/22-2/D2-Tie-Guan-Yin.md","dunkles-taiwan/hong-shui":"/src/content/teas/22-2/D3-Hong-Shui.md","dunkles-taiwan/gaba":"/src/content/teas/22-2/D4-GABA.md","dunkles-taiwan/2001":"/src/content/teas/22-2/D5-2001.md","dunkles-taiwan/eastern-beauty":"/src/content/teas/22-2/D6-Eastern-Beauty.md","dunkles-taiwan/mi-xiang":"/src/content/teas/22-2/D7-Mi-Xiang.md","dunkles-taiwan/hong-yu":"/src/content/teas/22-2/D8-Hong-Yu.md","helles-taiwan/bi-luo-chun":"/src/content/teas/22-2/H1-Bi-Luo-Chun.md","helles-taiwan/long-jing":"/src/content/teas/22-2/H2-Long-Jing.md","helles-taiwan/meishan":"/src/content/teas/22-2/H3-Meishan.md","helles-taiwan/shibi":"/src/content/teas/22-2/H4-Shibi.md","helles-taiwan/longfengxia":"/src/content/teas/22-2/H5-Longfengxia.md","helles-taiwan/cui-luan":"/src/content/teas/22-2/H6-Cui-Luan.md","helles-taiwan/lishan-ffs":"/src/content/teas/22-2/H7-Lishan-FSS.md","helles-taiwan/lishan-88k":"/src/content/teas/22-2/H8-Lishan-88K.md","chinas-schaetze/long-jing":"/src/content/teas/23-1/01-Long-Jing.md","chinas-schaetze/bai-mu-dan":"/src/content/teas/23-1/02-2021-Bai-Mu-Dan.md","chinas-schaetze/2020-shou-mei":"/src/content/teas/23-1/03-2020-Shou-Mei.md","chinas-schaetze/qing-xiang-tgy":"/src/content/teas/23-1/04-Qing-Xiang-TGY.md","chinas-schaetze/hearth-tgy":"/src/content/teas/23-1/05-Hearth-TGY.md","chinas-schaetze/canton-canon-tgy":"/src/content/teas/23-1/06-Canton-Canon-TGY.md","chinas-schaetze/da-hong-pao":"/src/content/teas/23-1/07-Da-Hong-Pao.md","chinas-schaetze/lapsang-souchong":"/src/content/teas/23-1/08-Lapsang-Souchong.md","chinas-schaetze/fuzhuan":"/src/content/teas/23-1/09-Fuzhuan.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/teas/22-1/01-Bao-Zhong.md": () => import('../01-Bao-Zhong.231ae686.mjs'),"/src/content/teas/22-1/02-Alishan-Jin-Xuan.md": () => import('../02-Alishan-Jin-Xuan.c0c34278.mjs'),"/src/content/teas/22-1/03-Light-Roast-Jin-Xuan.md": () => import('../03-Light-Roast-Jin-Xuan.31482580.mjs'),"/src/content/teas/22-1/04-Light-Charcoal-Roast.md": () => import('../04-Light-Charcoal-Roast.7ae77c03.mjs'),"/src/content/teas/22-1/05-Traditional-Charcoal-Roast.md": () => import('../05-Traditional-Charcoal-Roast.794d2a68.mjs'),"/src/content/teas/22-1/06-Wuyi-Hong-Shui.md": () => import('../06-Wuyi-Hong-Shui.5b76fb4f.mjs'),"/src/content/teas/22-1/07-Bai-Hao.md": () => import('../07-Bai-Hao.50562f7c.mjs'),"/src/content/teas/22-2/D1-Dong-Ding.md": () => import('../D1-Dong-Ding.8dce0e3f.mjs'),"/src/content/teas/22-2/D2-Tie-Guan-Yin.md": () => import('../D2-Tie-Guan-Yin.626eeb11.mjs'),"/src/content/teas/22-2/D3-Hong-Shui.md": () => import('../D3-Hong-Shui.ef36834a.mjs'),"/src/content/teas/22-2/D4-GABA.md": () => import('../D4-GABA.995b7c82.mjs'),"/src/content/teas/22-2/D5-2001.md": () => import('../D5-2001.e0d31f84.mjs'),"/src/content/teas/22-2/D6-Eastern-Beauty.md": () => import('../D6-Eastern-Beauty.69c6ec2d.mjs'),"/src/content/teas/22-2/D7-Mi-Xiang.md": () => import('../D7-Mi-Xiang.b7d69ed3.mjs'),"/src/content/teas/22-2/D8-Hong-Yu.md": () => import('../D8-Hong-Yu.c92d0e12.mjs'),"/src/content/teas/22-2/H1-Bi-Luo-Chun.md": () => import('../H1-Bi-Luo-Chun.fd41a1d5.mjs'),"/src/content/teas/22-2/H2-Long-Jing.md": () => import('../H2-Long-Jing.8b67cab1.mjs'),"/src/content/teas/22-2/H3-Meishan.md": () => import('../H3-Meishan.943752a3.mjs'),"/src/content/teas/22-2/H4-Shibi.md": () => import('../H4-Shibi.744828b2.mjs'),"/src/content/teas/22-2/H5-Longfengxia.md": () => import('../H5-Longfengxia.32342c23.mjs'),"/src/content/teas/22-2/H6-Cui-Luan.md": () => import('../H6-Cui-Luan.3dc1d378.mjs'),"/src/content/teas/22-2/H7-Lishan-FSS.md": () => import('../H7-Lishan-FSS.8996ae0d.mjs'),"/src/content/teas/22-2/H8-Lishan-88K.md": () => import('../H8-Lishan-88K.34b5d274.mjs'),"/src/content/teas/23-1/01-Long-Jing.md": () => import('../01-Long-Jing.7678396c.mjs'),"/src/content/teas/23-1/02-2021-Bai-Mu-Dan.md": () => import('../02-2021-Bai-Mu-Dan.42b01571.mjs'),"/src/content/teas/23-1/03-2020-Shou-Mei.md": () => import('../03-2020-Shou-Mei.4f86abc7.mjs'),"/src/content/teas/23-1/04-Qing-Xiang-TGY.md": () => import('../04-Qing-Xiang-TGY.41826a1a.mjs'),"/src/content/teas/23-1/05-Hearth-TGY.md": () => import('../05-Hearth-TGY.fa9cfa2e.mjs'),"/src/content/teas/23-1/06-Canton-Canon-TGY.md": () => import('../06-Canton-Canon-TGY.ff7001c3.mjs'),"/src/content/teas/23-1/07-Da-Hong-Pao.md": () => import('../07-Da-Hong-Pao.02e22ec3.mjs'),"/src/content/teas/23-1/08-Lapsang-Souchong.md": () => import('../08-Lapsang-Souchong.9cc55fb7.mjs'),"/src/content/teas/23-1/09-Fuzhuan.md": () => import('../09-Fuzhuan.49722991.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$1 = createAstro();
const $$Tea = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tea;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
${renderHead()}</head>
<body>
    <a href="/">Projekt Teegenuss</a>
    ${renderSlot($$result, $$slots["default"])}
</body></html>`;
}, "/home/cauri/Projects/Teegenuss/src/layouts/Tea.astro");

const $$Astro = createAstro();
async function getStaticPaths() {
  const teas = await getCollection("teas");
  return teas.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Tea", $$Tea, { "title": entry.data.title }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead()}<h1>${entry.data.title}</h1>
    ${renderComponent($$result2, "Content", Content, {})}
` })}`;
}, "/home/cauri/Projects/Teegenuss/src/pages/[...tea].astro");

const $$file = "/home/cauri/Projects/Teegenuss/src/pages/[...tea].astro";
const $$url = "/[...tea]";

const ____tea_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ____tea_ as _, getCollection as g };

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof AnyEntryMap> = AnyEntryMap[C][keyof AnyEntryMap[C]];

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"teas": {
"22-1/01-Bao-Zhong.md": {
	id: "22-1/01-Bao-Zhong.md";
  slug: "22-1/01-bao-zhong";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-1/02-Alishan-Jin-Xuan.md": {
	id: "22-1/02-Alishan-Jin-Xuan.md";
  slug: "22-1/02-alishan-jin-xuan";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-1/03-Light-Roast-Jin-Xuan.md": {
	id: "22-1/03-Light-Roast-Jin-Xuan.md";
  slug: "22-1/03-light-roast-jin-xuan";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-1/04-Light-Charcoal-Roast.md": {
	id: "22-1/04-Light-Charcoal-Roast.md";
  slug: "22-1/04-light-charcoal-roast";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-1/05-Traditional-Charcoal-Roast.md": {
	id: "22-1/05-Traditional-Charcoal-Roast.md";
  slug: "22-1/05-traditional-charcoal-roast";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-1/06-Wuyi-Hong-Shui.md": {
	id: "22-1/06-Wuyi-Hong-Shui.md";
  slug: "22-1/06-wuyi-hong-shui";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-1/07-Bai-Hao.md": {
	id: "22-1/07-Bai-Hao.md";
  slug: "22-1/07-bai-hao";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/D1-Dong-Ding.md": {
	id: "22-2/D1-Dong-Ding.md";
  slug: "22-2/d1-dong-ding";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/D2-Tie-Guan-Yin.md": {
	id: "22-2/D2-Tie-Guan-Yin.md";
  slug: "22-2/d2-tie-guan-yin";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/D3-Hong-Shui.md": {
	id: "22-2/D3-Hong-Shui.md";
  slug: "22-2/d3-hong-shui";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/D4-GABA.md": {
	id: "22-2/D4-GABA.md";
  slug: "22-2/d4-gaba";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/D5-2001.md": {
	id: "22-2/D5-2001.md";
  slug: "22-2/d5-2001";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/D6-Eastern-Beauty.md": {
	id: "22-2/D6-Eastern-Beauty.md";
  slug: "22-2/d6-eastern-beauty";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/D7-Mi-Xiang.md": {
	id: "22-2/D7-Mi-Xiang.md";
  slug: "22-2/d7-mi-xiang";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/D8-Hong-Yu.md": {
	id: "22-2/D8-Hong-Yu.md";
  slug: "22-2/d8-hong-yu";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/H1-Bi-Luo-Chun.md": {
	id: "22-2/H1-Bi-Luo-Chun.md";
  slug: "22-2/h1-bi-luo-chun";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/H2-Long-Jing.md": {
	id: "22-2/H2-Long-Jing.md";
  slug: "22-2/h2-long-jing";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/H3-Meishan.md": {
	id: "22-2/H3-Meishan.md";
  slug: "22-2/h3-meishan";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/H4-Shibi.md": {
	id: "22-2/H4-Shibi.md";
  slug: "22-2/h4-shibi";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/H5-Longfengxia.md": {
	id: "22-2/H5-Longfengxia.md";
  slug: "22-2/h5-longfengxia";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/H6-Cui-Luan.md": {
	id: "22-2/H6-Cui-Luan.md";
  slug: "22-2/h6-cui-luan";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/H7-Lishan-FSS.md": {
	id: "22-2/H7-Lishan-FSS.md";
  slug: "22-2/h7-lishan-fss";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"22-2/H8-Lishan-88K.md": {
	id: "22-2/H8-Lishan-88K.md";
  slug: "22-2/h8-lishan-88k";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"23-1/01-Long-Jing.md": {
	id: "23-1/01-Long-Jing.md";
  slug: "23-1/01-long-jing";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"23-1/02-2021-Bai-Mu-Dan.md": {
	id: "23-1/02-2021-Bai-Mu-Dan.md";
  slug: "23-1/02-2021-bai-mu-dan";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"23-1/03-2020-Shou-Mei.md": {
	id: "23-1/03-2020-Shou-Mei.md";
  slug: "23-1/03-2020-shou-mei";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"23-1/04-Qing-Xiang-TGY.md": {
	id: "23-1/04-Qing-Xiang-TGY.md";
  slug: "23-1/04-qing-xiang-tgy";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"23-1/05-Hearth-TGY.md": {
	id: "23-1/05-Hearth-TGY.md";
  slug: "23-1/05-hearth-tgy";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"23-1/06-Canton-Canon-TGY.md": {
	id: "23-1/06-Canton-Canon-TGY.md";
  slug: "23-1/06-canton-canon-tgy";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"23-1/07-Da-Hong-Pao.md": {
	id: "23-1/07-Da-Hong-Pao.md";
  slug: "23-1/07-da-hong-pao";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"23-1/08-Lapsang-Souchong.md": {
	id: "23-1/08-Lapsang-Souchong.md";
  slug: "23-1/08-lapsang-souchong";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
"23-1/09-Fuzhuan.md": {
	id: "23-1/09-Fuzhuan.md";
  slug: "23-1/09-fuzhuan";
  body: string;
  collection: "teas";
  data: InferEntrySchema<"teas">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"packs": {
"22-1-Einstieg": {
	id: "22-1-Einstieg";
  collection: "packs";
  data: InferEntrySchema<"packs">
};
"22-2-Dunkles-Taiwan": {
	id: "22-2-Dunkles-Taiwan";
  collection: "packs";
  data: InferEntrySchema<"packs">
};
"22-2-Helles-Taiwan": {
	id: "22-2-Helles-Taiwan";
  collection: "packs";
  data: InferEntrySchema<"packs">
};
"23-1-Chinas-Schaetze": {
	id: "23-1-Chinas-Schaetze";
  collection: "packs";
  data: InferEntrySchema<"packs">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}

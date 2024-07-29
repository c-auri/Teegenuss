import { defineCollection, z, reference } from 'astro:content';

const types = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    shorthand: z.string()
  })
})

const packs = defineCollection({
  type: 'data',
  schema: z.object({
    route: z.string(),
    title: z.string(),
    date: z.string(),
    numberOfTeas: z.number(),
    totalWeight: z.string(),
    teaser: z.string(),
    annotation: z.string().optional(),
    stash: z.number().int(),
    price: z.number(),
    priority: z.number().optional()
  })
})

const teas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    route: z.string(),
    pack: reference('packs'),
    type: reference('types'),
    hasImage: z.boolean().default(true),
    hasHover: z.boolean().default(true),
    purchase: z.object({
      shop: reference('shops'),
      productUrl: z.string().url(),
      amount: z.string(),
      pricePer100g: z.string(),
      currency: z.string(),
    }),
    origin: z.object({
      country: z.optional(z.string().nullable()),
      town: z.optional(z.string().nullable()),
      elevation: z.string().nullable(),
      harvest: z.string().nullable(),
      plant: z.string().nullable(),
    }),
    preparation: z.object({
      gongfu: z.optional(z.object({
        temperature: z.string(),
        amount: z.object({
          weight: z.string(),
          orVolume: z.string(),
        }).partial(),
        times: z.object({
          rinse: z.string(),
          firstInfusion: z.string(),
          secondInfusion: z.string(),
          thirdInfusion: z.string().optional(),
          laterInfusions: z.string(),
        })
      }))
    }),
    tags: z.array(z.string()),
  })
});

const tags = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    translation: z.optional(z.string()),
    synonyms: z.optional(z.string()),
  })
})

const shops = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    shorthand: z.string()
  })
})

export const collections = {
  'types': types,
  'packs': packs,
  'teas': teas,
  'tags': tags,
  'shops': shops,
};

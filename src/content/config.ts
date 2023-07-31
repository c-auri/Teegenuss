import { defineCollection, z, reference } from 'astro:content';

const packs = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    route: z.string(),
    stash: z.number().int(),
    price: z.number(),
  })
})

const teas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    route: z.string(),
    pack: reference('packs'),
    purchase: z.object({
      shopName: z.string(),
      shopUrl: z.string().url(),
      amount: z.string(),
      pricePer100g: z.string(),
      currency: z.string(),
    }),
    properties: z.object({
      categorization: z.object({
        tea: z.string(),
        plant: z.string().nullable(),
      }),
      origin: z.object({
        country: z.optional(z.string().nullable()),
        province: z.optional(z.string().nullable()),
        region: z.optional(z.string().nullable()),
        town: z.optional(z.string().nullable()),
        elevation: z.string().nullable(),
      }),
      production: z.object({
        harvest: z.string().nullable(),
        picking: z.optional(z.string()),
        oxidation: z.optional(z.string()),
        roast: z.optional(z.string()),
        roastMethod: z.optional(z.string()),
      }),
    }).partial(),
    preparation: z.object({
      gongfu: z.optional(z.object({
        temperature: z.string(),
        amount: z.object({
          weight: z.string(),
          orVolume: z.string(),
          ball: z.string(),
        }).partial(),
        times: z.object({
          rinse: z.string(),
          firstInfusion: z.string(),
          secondInfusion: z.string(),
          laterInfusions: z.string(),
        })
      }))
    }),
    tags: z.array(z.string())
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

export const collections = {
  'packs': packs,
  'teas': teas,
  'tags': tags,
};
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
        plant: z.string(),
      }).partial(),
      origin: z.object({
        country: z.string(),
        province: z.string(),
        region: z.string(),
        town: z.string(),
        elevation: z.string(),
      }).partial(),
      production: z.object({
        harvest: z.string(),
        picking: z.string(),
        oxidation: z.string(),
        roast: z.string(),
        roastMethod: z.string(),
      }).partial(),
    }).partial(),
    preparation: z.object({
      gongfu: z.object({
        temperature: z.string(),
        amount: z.object({
          weight: z.string(),
          orVolume: z.string(),
        }).partial(),
        times: z.object({
          rinse: z.string(),
          firstInfusions: z.string(),
          firstInfusion: z.string(),
          secondInfusion: z.string(),
          thirdInfusion: z.string(),
          until: z.string(),
          laterInfusions: z.string(),
        }).partial()
      }).partial()
    }).partial()
  }).partial()
});

export const collections = {
  'packs': packs,
  'teas': teas,
};
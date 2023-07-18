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
    shop: z.string(),
    shopUrl: z.string().url(),
    amount: z.string(),
    price: z.number(),
    currency: z.string(),
  })
});

export const collections = {
  'packs': packs,
  'teas': teas,
};
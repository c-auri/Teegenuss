import { z, defineCollection } from 'astro:content';

const teas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shop: z.string(),
    shopUrl: z.string().url(),
    amount: z.string(),
    price: z.number(),
    currency: z.string(),
  })
});

export const collections = {
  'teas': teas,
};
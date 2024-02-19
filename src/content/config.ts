import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.date(),
        desc: z.string(),
        draft: z.boolean(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    blog
};

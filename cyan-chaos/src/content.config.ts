import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
	loader: glob({ base: './src/content/services', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		intentKeywords: z.array(z.string()).default([]),
		audience: z.enum(['hogar', 'negocio', 'ambos']).default('ambos'),
		order: z.number().default(0),
		ctaLabel: z.string().default('Cotizar por WhatsApp'),
	}),
});

const products = defineCollection({
	loader: glob({ base: './src/content/products', pattern: '**/*.md' }),
	schema: z.object({
		name: z.string(),
		type: z.enum([
			'bala',
			'domo',
			'ptz',
			'panel',
			'sensor-puerta',
			'sensor-movimiento',
			'kit',
		]),
		audience: z.enum(['hogar', 'negocio', 'ambos']).default('ambos'),
		specs: z
			.array(z.object({ label: z.string(), value: z.string() }))
			.default([]),
		useCase: z.string().optional(),
		featured: z.boolean().default(false),
		order: z.number().default(0),
	}),
});

const zones = defineCollection({
	loader: glob({ base: './src/content/zones', pattern: '**/*.md' }),
	schema: z.object({
		name: z.string(),
		kind: z.enum(['primary', 'nearby', 'tbd']).default('nearby'),
		description: z.string(),
		priority: z.number().default(0),
		confirmed: z.boolean().default(false),
	}),
});

const faqs = defineCollection({
	loader: glob({ base: './src/content/faqs', pattern: '**/*.md' }),
	schema: z.object({
		question: z.string(),
		pageSlugs: z.array(z.string()).default([]),
		order: z.number().default(0),
	}),
});

export const collections = { services, products, zones, faqs };

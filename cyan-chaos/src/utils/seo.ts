import type { SiteConfig } from '../data/site';

type JsonLd = Record<string, unknown>;

/** El negocio apunta siempre al inicio. Sin calle ni horario hasta confirmar GBP (B2). */
export function buildLocalBusinessJsonLd(site: SiteConfig): JsonLd {
	const url = absoluteUrl(site.siteUrl, '/');
	return {
		'@context': 'https://schema.org',
		'@type': site.schemaType,
		'@id': `${url}#negocio`,
		name: site.brandName,
		url,
		telephone: site.phoneE164,
		email: site.email,
		description: `Cámaras, alarmas e instalación en ${site.city}, capital del ${site.region}.`,
		address: {
			'@type': 'PostalAddress',
			addressLocality: site.city,
			addressRegion: site.region,
			addressCountry: site.country,
		},
		areaServed: site.serviceAreas.map((area) => ({ '@type': 'City', name: area.name })),
		sameAs: [site.socials.facebook, site.socials.googleBusiness],
	};
}

export function buildBreadcrumbJsonLd(site: SiteConfig, pathname: string, name: string): JsonLd | null {
	if (pathname === '/' || pathname === '') return null;
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Inicio',
				item: absoluteUrl(site.siteUrl, '/'),
			},
			{
				'@type': 'ListItem',
				position: 2,
				name,
				item: absoluteUrl(site.siteUrl, pathname),
			},
		],
	};
}

export function buildFaqJsonLd(items: { question: string; answer: string }[]): JsonLd | null {
	const ready = items.filter((item) => item.question && item.answer);
	if (ready.length === 0) return null;
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: ready.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	};
}

/** Home conserva la barra final. El resto va sin slash, igual que `trailingSlash: 'never'`. */
export function absoluteUrl(siteUrl: string, pathname: string): string {
	const base = siteUrl.replace(/\/$/, '');
	if (!pathname || pathname === '/') return `${base}/`;
	const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return `${base}${path.replace(/\/$/, '')}`;
}

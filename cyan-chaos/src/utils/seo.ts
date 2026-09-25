import type { SiteConfig } from '../data/site';

type LocalBusinessJsonLd = {
	'@context': 'https://schema.org';
	'@type': SiteConfig['schemaType'];
	name: string;
	url: string;
	telephone: string;
	email: string;
	description: string;
	areaServed: { '@type': 'City'; name: string }[];
	sameAs: string[];
};

/** Sin dirección postal hasta confirmar con GBP (B2). */
export function buildLocalBusinessJsonLd(site: SiteConfig, pageUrl: string): LocalBusinessJsonLd {
	return {
		'@context': 'https://schema.org',
		'@type': site.schemaType,
		name: site.brandName,
		url: pageUrl,
		telephone: site.phoneE164,
		email: site.email,
		description: `${site.tagline} — ${site.city}, ${site.region}.`,
		areaServed: [{ '@type': 'City', name: site.city }],
		sameAs: [site.socials.facebook, site.socials.googleBusiness],
	};
}

export function absoluteUrl(siteUrl: string, pathname: string): string {
	const base = siteUrl.replace(/\/$/, '');
	const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return path === '/' ? `${base}/` : `${base}${path}`;
}

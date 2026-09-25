/** Single source de negocio — sincronizar `site` en astro.config.mjs al cambiar URL de producción. */
export const site = {
	brandName: 'Cámaras y Alarmas San José',
	brandNameLegacy: 'Guaraví',
	tagline: 'Protege tu hogar o negocio',
	phoneDisplay: '315 884 2167',
	phoneE164: '+573158842167',
	whatsappUrl: 'https://wa.me/573158842167',
	email: 'guarav@polsia.app',
	city: 'San José del Guaviare',
	region: 'Guaviare',
	country: 'CO',
	locale: 'es-CO',
	/** Dominio final TBD (Fase 8); placeholder para sitemap/canonical en preview. */
	siteUrl: 'https://camarasyalarmassanjose.pages.dev',
	schemaType: 'HomeAndConstructionBusiness' as const,
	socials: {
		facebook: 'https://www.facebook.com/profile.php?id=61579056313249',
		googleBusiness: 'https://share.google/4xYqmCL47Gmntu9hs',
	},
} as const;

export type SiteConfig = typeof site;

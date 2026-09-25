/** Single source de negocio — sincronizar `site` en astro.config.mjs al cambiar URL de producción. */
export const site = {
	brandName: 'Cámaras y Alarmas San José',
	brandNameLegacy: 'Guaraví',
	tagline: 'Protege tu hogar o negocio',
	phoneDisplay: '315 884 2167',
	phoneE164: '+573158842167',
	whatsappUrl: 'https://wa.me/573158842167',
	email: 'camarasyalarmassanjose@gmail.com',
	city: 'San José del Guaviare',
	region: 'Guaviare',
	/** Capital primero. Confirmado por el cliente el 2026-09-25. */
	serviceAreas: [
		{ name: 'San José del Guaviare', slug: 'san-jose-del-guaviare', primary: true },
		{ name: 'El Retorno', slug: 'el-retorno', primary: false },
		{ name: 'Calamar', slug: 'calamar', primary: false },
		{ name: 'Mapiripán', slug: 'mapiripan', primary: false },
		{ name: 'Concordia', slug: 'concordia', primary: false },
	],
	country: 'CO',
	locale: 'es-CO',
	/** Host canónico: Vercel redirige el apex a www. */
	siteUrl: 'https://www.camarasyalarmassanjose.lat',
	schemaType: 'HomeAndConstructionBusiness' as const,
	socials: {
		facebook: 'https://www.facebook.com/profile.php?id=61579056313249',
		googleBusiness: 'https://share.google/4xYqmCL47Gmntu9hs',
	},
} as const;

export type SiteConfig = typeof site;

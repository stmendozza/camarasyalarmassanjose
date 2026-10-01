/** Single source de negocio — sincronizar `site` en astro.config.mjs al cambiar URL de producción. */
export const site = {
	brandName: 'Cámaras de Seguridad San José',
	brandNameLegacy: 'Guaraví',
	tagline: 'Protege tu hogar o negocio',
	phoneDisplay: '315 884 2167',
	phoneE164: '+573158842167',
	whatsappUrl: 'https://wa.me/573158842167',
	email: 'camarasyalarmassanjose@gmail.com',
	city: 'San José del Guaviare',
	region: 'Guaviare',
	/**
	 * Capital primero. Confirmado por el cliente el 2026-09-25.
	 * lat/lng = centro aproximado del municipio (referencia pública OSM) para el mapa de cobertura.
	 */
	serviceAreas: [
		{
			name: 'San José del Guaviare',
			slug: 'san-jose-del-guaviare',
			primary: true,
			lat: 2.5689,
			lng: -72.6417,
		},
		{ name: 'El Retorno', slug: 'el-retorno', primary: false, lat: 2.3306, lng: -72.6275 },
		{ name: 'Calamar', slug: 'calamar', primary: false, lat: 1.9597, lng: -72.6531 },
		{ name: 'Mapiripán', slug: 'mapiripan', primary: false, lat: 2.8914, lng: -72.1331 },
		{ name: 'Concordia', slug: 'concordia', primary: false, lat: 2.4167, lng: -72.5833 },
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

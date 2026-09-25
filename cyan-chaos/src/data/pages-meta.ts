import { site } from './site';

export type PageMeta = {
	slug: string;
	title: string;
	description: string;
	h1: string;
};

const brand = site.brandName;
const city = site.city;

/** Borrador F2 — copy final en Fases 5–6 */
export const pagesMeta = {
	home: {
		slug: '',
		title: `Sistemas de Seguridad en ${city} | ${brand}`,
		description: `${brand}: cámaras, alarmas inteligentes e instalación profesional en ${city}. Cotiza por WhatsApp.`,
		h1: site.tagline,
	},
	'camaras-de-seguridad': {
		slug: 'camaras-de-seguridad',
		title: `Cámaras de Seguridad en ${city}`,
		description: `Cámaras de vigilancia bala, domo y PTZ con instalación en ${city}. Monitoreo desde el celular.`,
		h1: `Cámaras de seguridad en ${city}`,
	},
	alarmas: {
		slug: 'alarmas',
		title: `Alarmas Inteligentes en ${city}`,
		description: `Alarmas inteligentes, sensores y paneles para hogar y negocio en ${city}.`,
		h1: 'Alarmas inteligentes para hogar y negocio',
	},
	instalacion: {
		slug: 'instalacion',
		title: `Instalación de Cámaras y Alarmas | ${city}`,
		description: `Instalación profesional de cámaras y alarmas en ${city}. Soporte técnico local.`,
		h1: 'Instalación profesional incluida',
	},
	mantenimiento: {
		slug: 'mantenimiento',
		title: `Mantenimiento de Cámaras en ${city}`,
		description: `Mantenimiento preventivo y correctivo de cámaras de seguridad en ${city}.`,
		h1: 'Mantenimiento preventivo de cámaras',
	},
	'sistemas-de-seguridad': {
		slug: 'sistemas-de-seguridad',
		title: `Sistemas de Seguridad | ${city}`,
		description: `Paquetes y sistemas integrados de cámaras y alarmas en ${city}.`,
		h1: 'Sistemas de seguridad a tu medida',
	},
	hogar: {
		slug: 'hogar',
		title: `Cámaras y Alarmas para el Hogar | ${city}`,
		description: `Protección residencial con cámaras y alarmas en ${city}.`,
		h1: 'Seguridad para tu hogar',
	},
	negocios: {
		slug: 'negocios',
		title: `Cámaras y Alarmas para Negocios | ${city}`,
		description: `Vigilancia para locales comerciales y negocios en ${city}.`,
		h1: 'Vigilancia para tu negocio',
	},
	cobertura: {
		slug: 'cobertura',
		title: `Cobertura de Servicio | ${city} y zona`,
		description: `Zonas donde instalamos cámaras y alarmas. ${city} y alrededores.`,
		h1: 'Dónde instalamos',
	},
	'sobre-nosotros': {
		slug: 'sobre-nosotros',
		title: `Sobre Nosotros | Soporte Técnico Local`,
		description: `${brand}: soporte técnico local en ${city}.`,
		h1: 'Soporte técnico local en San José',
	},
	contacto: {
		slug: 'contacto',
		title: 'Contacto y Cotización | WhatsApp',
		description: `Cotiza cámaras y alarmas por WhatsApp ${site.phoneDisplay} o formulario.`,
		h1: 'Contáctanos',
	},
} as const satisfies Record<string, PageMeta>;

export type PageKey = keyof typeof pagesMeta;

export function getPageMeta(key: PageKey): PageMeta {
	return pagesMeta[key];
}

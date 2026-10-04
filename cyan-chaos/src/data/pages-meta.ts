import { site } from './site';

export type PageMeta = {
	slug: string;
	title: string;
	description: string;
	h1: string;
};

const city = site.city;

/** Titles congelados en Fase 6. Home no compite por «sistemas de seguridad»; esa frase vive en /sistemas-de-seguridad. */
export const pagesMeta = {
	home: {
		slug: '',
		title: `Cámaras y alarmas en ${city}`,
		description: `Cámaras, alarmas e instalación en ${city}, capital del Guaviare. También El Retorno, Calamar, Mapiripán y Concordia. Cotiza por WhatsApp.`,
		h1: 'Seguridad inteligente y monitoreo 24/7 sin importar dónde estés',
	},
	'camaras-de-seguridad': {
		slug: 'camaras-de-seguridad',
		title: `Cámaras de seguridad en ${city}`,
		description: `Cámaras bala, domo y PTZ con instalación y app para ver en vivo desde el celular. Soporte local en ${city}.`,
		h1: `Cámaras de seguridad en ${city}`,
	},
	alarmas: {
		slug: 'alarmas',
		title: `Alarmas inteligentes en ${city}`,
		description: `Sensores, paneles de control y alertas en tiempo real a tu celular para proteger casa, local o finca en ${city}. Instalación profesional y soporte técnico en la zona.`,
		h1: `Alarmas inteligentes en ${city}`,
	},
	instalacion: {
		slug: 'instalacion',
		title: `Instalación de cámaras en ${city}`,
		description: `Instalación de cámaras y alarmas a domicilio en ${city}. Dejamos el sistema listo y te explicamos la app.`,
		h1: `Instalación de cámaras y alarmas en ${city}`,
	},
	mantenimiento: {
		slug: 'mantenimiento',
		title: `Mantenimiento de cámaras en ${city}`,
		description: `Mantenimiento preventivo y reparación de cámaras y alarmas en ${city}, aunque el equipo lo haya instalado otro proveedor.`,
		h1: `Mantenimiento de cámaras en ${city}`,
	},
	'sistemas-de-seguridad': {
		slug: 'sistemas-de-seguridad',
		title: `Sistemas de seguridad en ${city}`,
		description: `Sistemas de cámaras y alarmas a la medida del espacio en ${city}. El alcance se cotiza por WhatsApp, sin tarifa publicada.`,
		h1: `Sistemas de seguridad en ${city}`,
	},
	hogar: {
		slug: 'hogar',
		title: `Seguridad para el hogar en ${city}`,
		description: `Cámaras y alarmas para la casa en ${city}, con monitoreo desde el celular y soporte técnico local.`,
		h1: `Seguridad para el hogar en ${city}`,
	},
	negocios: {
		slug: 'negocios',
		title: `Vigilancia para negocios en ${city}`,
		description: `Cámaras y alarmas para tiendas, talleres y oficinas en ${city}. Inventario, caja y accesos, con soporte local.`,
		h1: `Vigilancia para negocios en ${city}`,
	},
	cobertura: {
		slug: 'cobertura',
		title: `Cobertura en ${city} y la zona`,
		description: `Instalamos en ${city}, capital del Guaviare, y también en El Retorno, Calamar, Mapiripán y Concordia.`,
		h1: 'Dónde instalamos en el Guaviare',
	},
	'sobre-nosotros': {
		slug: 'sobre-nosotros',
		title: `Soporte técnico en ${city}`,
		description: `${site.brandName}: instalación y soporte técnico local en ${city}, no un call center de otra ciudad.`,
		h1: `Soporte técnico local en ${city}`,
	},
	contacto: {
		slug: 'contacto',
		title: `Contacto y cotización inmediata en ${city}`,
		description: `Escríbenos por WhatsApp para asesoría personalizada, dudas técnicas o agendar una visita en hogar, negocio o finca en ${city}. Respuesta rápida el mismo día.`,
		h1: 'Contacto y cotización inmediata',
	},
} as const satisfies Record<string, PageMeta>;

export type PageKey = keyof typeof pagesMeta;

export function getPageMeta(key: PageKey): PageMeta {
	return pagesMeta[key];
}

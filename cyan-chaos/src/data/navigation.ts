export type NavItem = { href: string; label: string };

export type NavGroup = {
	label: string;
	items: NavItem[];
};

/**
 * Nav híbrido:
 * - Home ancla `#sistemas` = conversión rápida
 * - Servicios / cobertura / contacto = URLs SEO del clúster
 */
export const headerNav: Array<NavItem | NavGroup> = [
	{ href: '/#sistemas', label: 'Sistemas' },
	{
		label: 'Servicios',
		items: [
			{ href: '/camaras-de-seguridad', label: 'Cámaras' },
			{ href: '/alarmas', label: 'Alarmas' },
			{ href: '/instalacion', label: 'Instalación' },
			{ href: '/mantenimiento', label: 'Mantenimiento' },
			{ href: '/sistemas-de-seguridad', label: 'Paquetes' },
		],
	},
	{ href: '/cobertura', label: 'Cobertura' },
	{ href: '/contacto', label: 'Contacto' },
];

export function isNavGroup(item: NavItem | NavGroup): item is NavGroup {
	return 'items' in item;
}

/** Footer: enlaces SEO indexables del clúster (evita huérfanas). */
export const footerNav: NavItem[] = [
	{ href: '/camaras-de-seguridad', label: 'Cámaras' },
	{ href: '/alarmas', label: 'Alarmas' },
	{ href: '/instalacion', label: 'Instalación' },
	{ href: '/mantenimiento', label: 'Mantenimiento' },
	{ href: '/sistemas-de-seguridad', label: 'Sistemas' },
	{ href: '/hogar', label: 'Hogar' },
	{ href: '/negocios', label: 'Negocios' },
	{ href: '/cobertura', label: 'Cobertura' },
	{ href: '/sobre-nosotros', label: 'Sobre nosotros' },
	{ href: '/contacto', label: 'Contacto' },
];

export const landingSystems = [
	{
		id: 'videovigilancia',
		href: '/camaras-de-seguridad',
		title: 'Cámaras de seguridad',
		navTitle: 'Cámaras de seguridad',
		short: 'CCTV',
		tag: 'CCTV + app',
		lead: 'Equipos de alta definición adaptados a residencias, locales comerciales y zonas rurales sin internet o energía fija. Control total desde tu celular.',
		points: [
			'Monitoreo en vivo',
			'Infrarrojo y color nocturno',
			'Resistencia intemperie',
			'Soporte local garantizado',
		],
		cta: 'Cotizar mi sistema',
		detailCta: 'Ver características',
		icon: 'cam' as const,
		detail: {
			intro:
				'Diseñamos la cobertura exacta para tu hogar, negocio o finca. Te entregamos todo configurado para monitorear en vivo y revisar grabaciones desde tu celular las 24/7.',
			bullets: [
				'Cámaras bala, domo, PTZ, Wi-Fi, 4G o solares según la zona.',
				'Grabación continua o por detección de movimiento.',
				'Visión nocturna HD para máxima claridad en la oscuridad.',
				'Capacitación del uso de la app en tu celular antes de entregar.',
			],
			note: 'Cotizamos la cantidad exacta de cámaras según tu espacio real, sin paquetes genéricos ni sobrecostos.',
		},
	},
	{
		id: 'alarmas',
		href: '/alarmas',
		title: 'Alarmas inteligentes',
		navTitle: 'Alarmas inteligentes',
		short: 'Alarmas',
		tag: 'Sensores + panel',
		lead: 'Detección oportuna de intromisión para todo tipo de propiedad. Vinculación directa a tu celular sin cuotas mensuales de monitoreo externo.',
		points: ['Alertas al celular', 'Sensores de impacto/PIR', 'Sin mensualidades', 'Fácil activación'],
		cta: 'Cotizar por WhatsApp',
		detailCta: 'Más detalle',
		icon: 'bell' as const,
		detail: {
			intro:
				'Detección de intrusos en tiempo real. Activas el sistema al salir y recibes alertas inmediatas en tu celular si alguien intenta ingresar a tu hogar, negocio o finca.',
			bullets: [
				'Sensores de acceso: Para puertas, ventanas, vitrinas y áreas con movimiento.',
				'Control móvil: Arma y desarma desde la app fácilmente sin claves complicadas.',
				'Sin mensualidades: Tu equipo es 100% tuyo, sin cuotas ni contratos obligatorios.',
				'Integración total: Compatible con tus cámaras para verificar en vivo la alerta.',
			],
			note: 'Diseñamos el kit exacto según el número de accesos y zonas a proteger. Cotiza por WhatsApp en minutos.',
		},
	},
	{
		id: 'instalacion',
		href: '/instalacion',
		title: 'Instalación y puesta en marcha',
		navTitle: 'Instalación',
		short: 'Instalación',
		tag: 'Llave en mano',
		lead: 'Montaje, cableado, configuración del equipo y explicación de la app en sitio. Listo para usar en tu hogar, negocio o finca.',
		points: ['Instalación limpia', 'Explicación de uso', 'Soporte local'],
		cta: 'Agendar instalación por WhatsApp',
		detailCta: 'Más detalle',
		icon: 'gear' as const,
		detail: {
			intro:
				'No entregamos cajas para que tú armes. Montamos, cableamos, configuramos el grabador o panel y dejamos el sistema probado en tu espacio.',
			bullets: [
				'Visita y montaje en San José del Guaviare y zonas de cobertura',
				'Configuración de app y usuarios',
				'Prueba de imagen, grabación y alertas antes de cerrar',
				'Indicaciones claras de uso para quien quede a cargo',
			],
			note: 'Agenda por WhatsApp. La fecha depende de disponibilidad y del alcance del trabajo.',
		},
	},
	{
		id: 'mantenimiento',
		href: '/mantenimiento',
		title: 'Mantenimiento y soporte técnico',
		navTitle: 'Mantenimiento',
		short: 'Soporte',
		tag: 'Preventivo + correctivo',
		lead: 'Servicio especializado para garantizar el funcionamiento continuo de tus cámaras y alarmas. Incluye limpieza de lentes, ajuste de conexiones, revisión de energía, optimización de grabación y calibración de la app.',
		points: ['Revisión técnica', 'Ajuste de app y almacenamiento', 'Atención local rápida'],
		cta: 'Pedir revisión',
		detailCta: 'Más detalle',
		icon: 'wrench' as const,
		detail: {
			intro:
				'Revisamos cámaras, grabadores y alarmas que ya tienes. Limpiamos, diagnosticamos fallas y dejamos el monitoreo funcionando de nuevo.',
			bullets: [
				'Diagnóstico en sitio sin importar quién instaló',
				'Revisión de app, red y grabación',
				'Limpieza y ajuste de ángulos',
				'Soporte local en la ciudad, no un call center lejano',
			],
			note: 'Cuéntanos el síntoma por WhatsApp (no graba, no conecta, alerta falsa) y te orientamos el siguiente paso.',
		},
	},
] as const;

export const landingAudiences = [
	{
		href: '/hogar',
		title: 'Para el hogar',
		icon: 'home' as const,
		lead: 'Protección en entradas, patios y pasillos. Monitoreo en vivo desde la app con sensores de movimiento y apertura para cuidar a tu familia.',
	},
	{
		href: '/negocios',
		title: 'Para el negocio o local',
		icon: 'store' as const,
		lead: 'Resguardo de cajas, inventario y accesos clave. Visión nocturna clara y soporte continuo para garantizar que tu sistema opere sin interrupciones.',
	},
	{
		href: '/camaras-de-seguridad#finca',
		title: 'Para fincas y propiedades rurales',
		icon: 'building' as const,
		lead: 'Cobertura de perímetros amplios, portones y zonas exteriores. Opciones de cámaras PTZ robóticas 360°, alimentación solar y conectividad 4G/Wi-Fi sin necesidad de cableado complejo.',
	},
] as const;

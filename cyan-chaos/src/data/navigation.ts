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
		title: 'Videovigilancia',
		navTitle: 'Videovigilancia',
		short: 'CCTV',
		tag: 'CCTV + app',
		lead: 'Cámaras bala, domo y PTZ con vista en vivo desde el celular. Imagen clara de día y de noche.',
		points: ['Monitoreo en app', 'Visión nocturna', 'Grabación continua'],
		cta: 'Cotizar cámaras',
		icon: 'cam' as const,
		detail: {
			intro:
				'Diseñamos la cobertura según el espacio: entradas, patios, pasillos o puntos críticos del local. El sistema queda listo para ver en vivo y revisar grabaciones desde el celular.',
			bullets: [
				'Tipos bala, domo y PTZ según el ángulo que necesitas',
				'Grabación continua o por eventos, según la configuración',
				'Visión nocturna para horarios de bajo tráfico',
				'Te explicamos la app en el sitio al entregar',
			],
			note: 'El alcance y la cantidad de cámaras se cotizan por WhatsApp según tu espacio real. Sin tarifas publicadas genéricas.',
		},
	},
	{
		id: 'alarmas',
		href: '/alarmas',
		title: 'Alarmas inteligentes',
		navTitle: 'Alarmas inteligentes',
		short: 'Alarmas',
		tag: 'Sensores + panel',
		lead: 'Sensores de puerta, ventana y movimiento con panel listo para armar cuando sales.',
		points: ['Alertas al instante', 'Casa o local', 'Compatible con cámaras'],
		cta: 'Cotizar alarma',
		icon: 'bell' as const,
		detail: {
			intro:
				'Un panel con sensores en los puntos de acceso. Armas al salir y recibes alerta cuando algo se activa. Se puede integrar con tu videovigilancia para ver qué pasó.',
			bullets: [
				'Sensores de puerta, ventana y movimiento',
				'Panel sencillo de armar y desarmar',
				'Útil en casa, tienda u oficina',
				'Compatible con cámaras del mismo sistema',
			],
			note: 'Te recomendamos la combinación de sensores según puertas, ventanas y zonas internas. Cotización por WhatsApp.',
		},
	},
	{
		id: 'instalacion',
		href: '/instalacion',
		title: 'Instalación y puesta en marcha',
		navTitle: 'Instalación',
		short: 'Instalación',
		tag: 'Llave en mano',
		lead: 'Montaje, cableado, configuración del grabador y explicación de la app en el sitio.',
		points: ['Instalación incluida', 'Prueba en sitio', 'Soporte local'],
		cta: 'Agendar instalación',
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
		title: 'Mantenimiento y soporte',
		navTitle: 'Mantenimiento',
		short: 'Soporte',
		tag: 'Preventivo + correctivo',
		lead: 'Revisión, limpieza y reparación aunque el equipo lo haya instalado otro proveedor.',
		points: ['Diagnóstico en sitio', 'App y grabación', 'Respuesta en la ciudad'],
		cta: 'Pedir revisión',
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
		title: 'Hogar',
		icon: 'home' as const,
		lead: 'Entradas, patios y zonas comunes. Seguridad familiar con app en el celular.',
	},
	{
		href: '/negocios',
		title: 'Negocio',
		icon: 'store' as const,
		lead: 'Tiendas, talleres y oficinas. Inventario, caja y accesos bajo control.',
	},
	{
		href: '/sistemas-de-seguridad',
		title: 'Empresa',
		icon: 'building' as const,
		lead: 'Sistemas a la medida del espacio. Alcance definido al cotizar por WhatsApp.',
	},
] as const;

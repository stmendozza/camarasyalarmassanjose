export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
	{ href: '/camaras-de-seguridad', label: 'Cámaras' },
	{ href: '/alarmas', label: 'Alarmas' },
	{ href: '/instalacion', label: 'Instalación' },
	{ href: '/mantenimiento', label: 'Mantenimiento' },
	{ href: '/cobertura', label: 'Cobertura' },
	{ href: '/contacto', label: 'Contacto' },
];

export const footerNav: NavItem[] = [
	{ href: '/sistemas-de-seguridad', label: 'Sistemas de seguridad' },
	{ href: '/hogar', label: 'Hogar' },
	{ href: '/negocios', label: 'Negocios' },
	{ href: '/sobre-nosotros', label: 'Sobre nosotros' },
	...mainNav,
];

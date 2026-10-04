export const productTypeLabel = {
	bala: 'Bala',
	domo: 'Domo',
	ptz: 'PTZ',
	wifi: 'Wi-Fi',
	panel: 'Panel',
	'sensor-puerta': 'Sensor de puerta',
	'sensor-movimiento': 'Sensor de movimiento',
	sirena: 'Sirena',
	'boton-panico': 'Botón de pánico',
	kit: 'Kit',
} as const;

/** Texto de “Tipo · …” en fichas (más descriptivo que la etiqueta corta). */
export const productTypeDetail = {
	bala: 'Exterior / Perimetral',
	domo: 'Interior / Discreta',
	ptz: 'Cobertura amplia / Robótica',
	wifi: 'Inalámbrica / Solar',
	panel: 'Panel central inteligente',
	'sensor-puerta': 'Sensor magnético de apertura',
	sirena: 'Sirena de alta potencia (Exterior / Interior)',
	'boton-panico': 'Pulsador de emergencia (Fijo / Inalámbrico)',
} as const;

export const barChartOptions = (charHex: string) => {
	let color = '#17EAF2';

	switch (charHex) {
		case 'rick':
			color = '#85F217';
			break;
		case 'morty':
			color = '#DFFF00';
			break;
		case 'summer':
			color = '#FF00EE';
			break;
		default:
			break;
	}

	return {
		xaxis: {
			categories: [
				'Jan',
				'Fev',
				'Mar',
				'Abr',
				'Mai',
				'Jun',
				'Jul',
				'Ago',
				'Set',
				'Out',
				'Nov',
				'Dez',
			],
			labels: {
				style: {
					colors: [
						'#FFF',
						'#FFF',
						'#FFF',
						'#FFF',
						'#FFF',
						'#FFF',
						'#FFF',
						'#FFF',
						'#FFF',
						'#FFF',
						'#FFF',
						'#FFF',
					],
				},
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: ['#FFF'],
				},
			},
		},
		dataLabels: {
			enabled: false,
		},
		plotOptions: {
			bar: {
				borderRadius: 4,
			},
		},
		colors: [color],
		tooltip: {
			enabled: false,
		},
		chart: {
			background: '#2E2E2E',
		},
		grid: {
			borderColor: '#d4d4d4',
			strokeDashArray: 2,
		},
		noData: {
			text: 'Sem dados para mostrar',
			align: 'center',
			verticalAlign: 'middle',
			offsetX: 0,
			offsetY: 0,
			style: {
				color: '#FFF',
				fontSize: '14px',
			},
		},
	};
};

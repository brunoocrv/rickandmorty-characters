export function getEpisodeYear(episodes: { air_date: string }[], year: string) {
	return episodes.filter((item: { air_date: string }) =>
		item.air_date.includes(year),
	);
}

export function getApparencies(episodes: { air_date: string }[], year: string) {
	const byYear = getEpisodeYear(episodes, year);

	const getApparenciesByMonth = (month: string) => {
		return byYear.filter((item: { air_date: string }) => {
			const splitMonth = item.air_date.split(' ')[0];

			if (splitMonth === month) return true;

			return false;
		}).length;
	};

	const results = [
		{
			data: [
				{
					x: 'Jan',
					y: getApparenciesByMonth('January'),
				},
				{
					x: 'Fev',
					y: getApparenciesByMonth('February'),
				},
				{
					x: 'Março',
					y: getApparenciesByMonth('March'),
				},
				{
					x: 'Abril',
					y: getApparenciesByMonth('April'),
				},
				{
					x: 'Maio',
					y: getApparenciesByMonth('May'),
				},
				{
					x: 'Junho',
					y: getApparenciesByMonth('June'),
				},
				{
					x: 'Julho',
					y: getApparenciesByMonth('July'),
				},
				{
					x: 'Agosto',
					y: getApparenciesByMonth('August'),
				},
				{
					x: 'Setembro',
					y: getApparenciesByMonth('September'),
				},
				{
					x: 'Outubro',
					y: getApparenciesByMonth('October'),
				},
				{
					x: 'Novembro',
					y: getApparenciesByMonth('November'),
				},
				{
					x: 'Dezembro',
					y: getApparenciesByMonth('December'),
				},
			],
		},
	];

	return results;
}

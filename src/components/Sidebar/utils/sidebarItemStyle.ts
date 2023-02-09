export function sideBarItemStyle(name: string) {
	let style = {
		background: '#17EAF2',
		color: '#000',
	};

	const formattedName = name.split(' ')[0].toLowerCase();

	switch (formattedName) {
		case 'rick':
			style = {
				background: '#85F217',
				color: '#000',
			};
			break;
		case 'morty':
			style = {
				background: '#DFFF00',
				color: '#000',
			};
			break;
		case 'summer':
			style = {
				background: '#FF00EE',
				color: '#000',
			};
			break;
		default:
			break;
	}

	return style;
}

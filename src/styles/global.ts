import { globalCss } from '.';

export const globalStyles = globalCss({
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
	},
	body: {
		backgroundColor: '$background',
		color: '$white',
		'-webkit-font-smoothing': 'antialiased',
	},
	'body, input, textarea, button': {
		fontFamily: 'Montserrat',
		fontWeight: 400,
	},
});

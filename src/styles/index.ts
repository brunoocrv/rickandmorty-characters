import { createStitches } from '@stitches/react';

export const {
	config,
	styled,
	globalCss,
	keyframes,
	getCssText,
	theme,
	createTheme,
	css,
} = createStitches({
	theme: {
		colors: {
			white: '#FFFF',
			background: '#121212',
			gray900: '#2E2E2E',
			gray800: '#3A3A3A',
			gray500: '#4C4C4C',
			blue500: '#17EAF2',
			yellow500: '#DFFF00',
			pink500: '#FF00EE',
			green500: '#85F217',
		},
		fontSizes: {
			span: '0.75rem',
			regular: '1rem',
			subtitle: '1.125rem',
			heading: '1.5rem',
			title: '3.5rem',
		},
	},
});

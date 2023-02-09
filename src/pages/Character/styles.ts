import { styled } from '@stitches/react';

export const Container = styled('div', {
	padding: '2rem 10rem 0 10rem',
	width: '100%',
});

export const CharacterName = styled('h1', {
	color: '$white',
	fontSize: '$title',
	padding: '3rem 0',
});

export const CharacterInfos = styled('div', {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	marginBottom: '12rem',
});

export const Subtitle = styled('p', {
	color: '$white',
	marginBottom: '1rem',
});

export const CharacterStatsContainer = styled('div', {
	isplay: 'flex',
	flexDirection: 'column',
});

export const StatsContainer = styled('table', {
	width: '49rem',
	border: 'none',
	borderSpacing: 0,
});

export const Stats = styled('tr', {
	variants: {
		background: {
			gray500: {
				background: '$gray500',
			},
			gray900: {
				background: '$gray900',
			},
		},
	},
	width: '100%',
	border: 'none',

	'th, td': {
		padding: '0.5rem 2rem',
		border: 'none',
		textAlign: 'center',
	},
});

export const Avatar = styled('img', {
	borderRadius: '50%',
});

export const ApparenciesContainer = styled('div', {
	display: 'flex',
	width: '100%',
	padding: '1rem 0',
	alignItems: 'center',
	justifyContent: 'space-between',
});

export const NoData = styled('p', {
	display: 'flex',
	alignItems: 'center',
	fontSize: '$subtitle',
	color: '$white',
});

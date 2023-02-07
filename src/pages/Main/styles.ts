import { styled } from '@stitches/react';

export const Container = styled('main', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	background: 'red',
	width: '19.37rem',
	height: '11.25rem',
	cursor: 'pointer',

	'&:hover': {
		opacity: 0.8,
	},

	h1: {
		fontSize: '$subtitle',
	},
});

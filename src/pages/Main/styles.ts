import { styled } from '@stitches/react';

export const Container = styled('div', {
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	paddingTop: '5rem',
	gap: 30,

	p: {
		fontSize: '$heading',
	},

	img: {
		width: '40rem',
		height: '13rem',
	},
});

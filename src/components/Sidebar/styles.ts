import { styled } from '@stitches/react';

export const SideBarWrapper = styled('aside', {
	display: 'flex',
	flexDirection: 'column',
	width: '19.37rem',

	a: {
		textDecoration: 'none',
	},
});

export const SidebarItem = styled('span', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	textDecoration: 'none',
	height: '8rem',
	cursor: 'pointer',
	position: 'relative',

	'&:hover': {
		opacity: 0.8,
	},

	h1: {
		fontSize: '$subtitle',
		fontWeight: 400,
	},
});

export const sidebarItemInactive = {
	background: '#4C4C4C',
	color: '#FFF',
};

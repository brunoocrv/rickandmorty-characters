import { styled } from '@stitches/react';
import { FaCircleNotch } from 'react-icons/fa';

import { keyframes } from '../../styles';

export const LoadingContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100vw',
	height: '100vh',

	span: {
		marginLeft: '0.5rem',
	},
});

const rotate = keyframes({
	'0%': { transform: 'rotate(0deg)' },
	'100%': { transform: 'rotate(360deg)' },
});

export const SpinnerLoading = styled(FaCircleNotch, {
	animation: `${rotate} 1.5s linear infinite`,
});

import React from 'react';

import { LoadingContainer, SpinnerLoading } from './styles';

import { LoadingProps } from '../../types/loading';

export function Loading({ message }: LoadingProps) {
	return (
		<LoadingContainer>
			<SpinnerLoading color="#FFFF" size={20} />
			<span>{message}...</span>
		</LoadingContainer>
	);
}

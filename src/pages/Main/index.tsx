import React, { useEffect, useState } from 'react';

import { Loading } from '../../components/Loading';

import { Container } from './styles';

export function Main() {
	const [isLoading, setIsloading] = useState(false);

	useEffect(() => {
		setIsloading(true);

		setTimeout(() => {
			setIsloading(false);
		}, 3000);
	}, []);

	return (
		<>
			{isLoading ? (
				<Loading message="Carregando Personagens" />
			) : (
				<div>
					<Container>
						<h1>Nome Rota</h1>
					</Container>
				</div>
			)}
		</>
	);
}

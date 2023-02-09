import React from 'react';

import logo from '../../assets/images/rick-and-morty-logo.webp';
import { Container } from './styles';

export function Main() {
	return (
		<>
			<Container>
				<p>👈 Selecione um personagem!!</p>

				<img src={logo} alt="Rick and Morty logo" />
			</Container>
		</>
	);
}

import { useQuery } from '@apollo/client';
import React from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
} from 'react-router-dom';
import { Loading } from '../components/Loading';
import { Sidebar } from '../components/Sidebar';
import { GET_CHARACTERS } from '../graphql/queries/characters';
import { Character } from '../pages/Character';

import { Main } from '../pages/Main';
import { RootContainer } from '../styles/routes';

const AppLayout = () => {
	const { loading, data } = useQuery(GET_CHARACTERS);

	if (loading) return <Loading message="Carregando Personagens..." />;

	return (
		<RootContainer>
			<Sidebar data={data} />
			<Outlet />
		</RootContainer>
	);
};

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<AppLayout />}>
			<Route path="/" element={<Main />} />
			<Route path="/character/:id" element={<Character />} />
		</Route>,
	),
);

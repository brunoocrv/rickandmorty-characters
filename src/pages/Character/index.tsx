import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { GET_CHARACTER_BY_ID } from '../../graphql/queries/characters';

import {
	ApparenciesContainer,
	Avatar,
	CharacterInfos,
	CharacterName,
	CharacterStatsContainer,
	Container,
	NoData,
	Stats,
	StatsContainer,
	Subtitle,
} from './styles';

import { Chart } from '../../components/Chart';
import { Loading } from '../../components/Loading';
import { barChartOptions } from './utils/chartUtils';
import { getApparencies } from './utils/characterUtils';
import { Select } from '../../components/Select';

export function Character() {
	const { id } = useParams();
	const { data, loading } = useQuery(GET_CHARACTER_BY_ID, {
		variables: { id: id },
	});
	const [year, setYear] = useState('2021');

	const options = [
		{ value: '2013' },
		{ value: '2014' },
		{ value: '2015' },
		{ value: '2016' },
		{ value: '2017' },
		{ value: '2018' },
		{ value: '2019' },
		{ value: '2020' },
		{ value: '2021' },
	];

	if (loading) return <Loading message="Carregando Personagem..." />;

	return (
		<Container>
			{data ? (
				<>
					<CharacterInfos>
						<CharacterStatsContainer>
							<CharacterName>{data.character.name}</CharacterName>
							<Subtitle>Dados do personagem</Subtitle>
							<StatsContainer>
								<Stats background="gray500">
									<th>Status</th>
									<th>Espécie</th>
									<th>Gênero</th>
									<th>Origem</th>
								</Stats>
								<Stats background="gray900">
									<td>{data.character.status}</td>
									<td>{data.character.species}</td>
									<td>{data.character.gender}</td>
									<td>{data.character.origin.name}</td>
								</Stats>
							</StatsContainer>
						</CharacterStatsContainer>
						<Avatar
							src={data.character.image}
							alt={`${data.character.name} Image`}
						/>
					</CharacterInfos>
					<ApparenciesContainer>
						<Subtitle>Aparições Mensais</Subtitle>
						<Select
							name="years"
							onChange={(event) => setYear(event.target.value)}
							options={options}
						/>
					</ApparenciesContainer>
					<Chart
						apparencies={getApparencies(data.character.episode, year)}
						options={barChartOptions(
							data.character.name.split(' ')[0].toLowerCase(),
						)}
						type="bar"
					/>
				</>
			) : (
				<NoData>
					Não foi possível carregar as informações do personagem, atualize a
					página ou tente novamente mais tarde.
				</NoData>
			)}
		</Container>
	);
}

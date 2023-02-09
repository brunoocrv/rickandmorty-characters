export type CharactersProps = {
	id: string;
	name: string;
};

export type CharactersResult = {
	characters: {
		results: CharactersProps[];
	};
};

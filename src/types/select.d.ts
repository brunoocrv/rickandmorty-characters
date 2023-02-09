export type SelectProps = {
	options: Array<{ value: string }>;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	name: string;
};

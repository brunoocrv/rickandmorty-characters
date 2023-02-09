import React from 'react';

import { SelectContainer } from './styles';

import { SelectProps } from '../../types/select';

export function Select({ options, onChange, name }: SelectProps) {
	return (
		<SelectContainer
			name={name}
			id={name}
			onChange={onChange}
			defaultValue={options[0].value}
		>
			{options.map((item: { value: string }) => (
				<option key={item.value} value={item.value}>
					{item.value}
				</option>
			))}
		</SelectContainer>
	);
}

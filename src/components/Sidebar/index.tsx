import React from 'react';
import { NavLink } from 'react-router-dom';
import { CharactersProps } from '../../types/character';

import { SidebarItem, sidebarItemInactive, SideBarWrapper } from './styles';

import { sideBarItemStyle } from './utils/sidebarItemStyle';

export function Sidebar({ data }: any) {
	return (
		<SideBarWrapper>
			{data.characters.results.map((item: CharactersProps) => (
				<NavLink
					style={({ isActive }) =>
						isActive ? sideBarItemStyle(item.name) : sidebarItemInactive
					}
					key={item.id}
					to={`/character/${item.id}`}
					className="navlink"
					onClick={() =>
						window.scrollTo({
							top: 0,
							behavior: 'smooth',
						})
					}
				>
					<SidebarItem>
						<h1>{item.name}</h1>
					</SidebarItem>
				</NavLink>
			))}
		</SideBarWrapper>
	);
}

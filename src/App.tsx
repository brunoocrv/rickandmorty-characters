import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './routing/routes';

import { globalStyles } from './styles/global';

globalStyles();

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;

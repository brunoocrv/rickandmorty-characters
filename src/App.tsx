import React from 'react';
import { Main } from './pages/Main';

import { globalStyles } from './styles/global';

globalStyles();

function App() {
	return (
		<div className="App">
			<Main />
		</div>
	);
}

export default App;

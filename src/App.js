import {Routes, Route} from 'react-router-dom';

import Home from './pages';
import Details from './pages/details.js';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:idFromUrl" element={<Details />} />
			</Routes>
		</>
	);
}

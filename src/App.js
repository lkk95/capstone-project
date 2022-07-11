import {Routes, Route} from 'react-router-dom';

import HomePage from './pages';
import DetailPage from './pages/details.js';
import PlannerPage from './pages/planner.js';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<HomePage />
							<PlannerPage />
						</>
					}
				/>
				<Route path="/:idFromUrl" element={<DetailPage />} />
			</Routes>
		</>
	);
}

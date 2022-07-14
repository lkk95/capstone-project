import {Routes, Route} from 'react-router-dom';

import HomePage from './pages';
import DetailPage from './pages/details.js';
import PlannerPage from './pages/planner.js';
import ShoppingList from './pages/shoppinglist.js';
import {GlobalStyle} from './styles';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/planner" element={<PlannerPage />} />
				<Route path="/:idFromUrl" element={<ShoppingList />} />
				<Route path="/:idFromUrl" element={<DetailPage />} />
			</Routes>
		</>
	);
}

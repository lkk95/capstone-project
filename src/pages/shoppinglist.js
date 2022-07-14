import {Helmet} from 'react-helmet';

import IngredientList from '../components/Ingredientlist/index.js';
import Layout from '../components/Layout/index.js';

export default function ShoppingList() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Shopping List</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<h1>Shopping List</h1>
			<IngredientList />
		</Layout>
	);
}

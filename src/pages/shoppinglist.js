import {Helmet} from 'react-helmet';

import Layout from '../components/Layout/index.js';
import useStore from '../hooks/useStore.js';

export default function ShoppingList() {
	const allIngredients = useStore(state => state.allIngredients);

	const ingredientsList = allIngredients.flat();

	return (
		<Layout>
			<Helmet>
				<title key="title">PlatePlan</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<ul>
				{ingredientsList.map((ingredient, index) => {
					return <li key={index}>{ingredient}</li>;
				})}
			</ul>
		</Layout>
	);
}

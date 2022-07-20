import {Helmet} from 'react-helmet';

import StyledHeading from '../components/HomeContainer/styledheading.js';
import IngredientList from '../components/IngredientList/index.js';
import Layout from '../components/Layout/index.js';

export default function ShoppingList() {
	return (
		<Layout>
			<Helmet>
				<title key="title">Shopping List</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<StyledHeading>Shopping List</StyledHeading>
			<IngredientList />
		</Layout>
	);
}

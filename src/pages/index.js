import {Helmet} from 'react-helmet';

import CreateForm from '../components/CreateForm/index.js';
import Layout from '../components/Layout/index.js';

import ShoppingList from './shoppinglist.js';

export default function HomePage() {
	return (
		<Layout>
			<Helmet>
				<title key="title">PlatePlan</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<CreateForm />
			<ShoppingList />
		</Layout>
	);
}

import {Helmet} from 'react-helmet';

import CreateForm from '../components/CreateForm/index.js';
import Layout from '../components/Layout/index.js';
import MealCard from '../components/MealCard/MealCard.js';
import useStore from '../hooks/useStore.js';

export default function HomePage() {
	const allMeals = useStore(state => state.allMeals);

	return (
		<Layout>
			<Helmet>
				<title key="title">MealsByMe</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<CreateForm />
			<h1>Your planned meals</h1>
			<section>
				{allMeals.map(meal => {
					return <MealCard key={meal.id} id={meal.id} />;
				})}
			</section>
		</Layout>
	);
}

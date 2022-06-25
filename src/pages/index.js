import {Helmet} from 'react-helmet';
import useStore from '../hooks/useStore.js';

import Layout from '../components/Layout/Layout.js';
import MealCard from '../components/MealCard/MealCard.js';

export default function HomePage() {
	const allMeals = useStore(state => state.allMeals);

	return (
		<Layout>
			<Helmet>
				<title key="title">MealsByMe</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<h1>Your planned meals</h1>
			<section>
				{allMeals.map(meal => {
					return <MealCard key={meal.id} title={meal.title} category={meal.category} />;
				})}
			</section>
		</Layout>
	);
}

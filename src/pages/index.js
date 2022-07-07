import {Helmet} from 'react-helmet';

import CreateForm from '../components/CreateForm/index.js';
import Layout from '../components/Layout/index.js';
import MealCard from '../components/MealCard/index.js';
import useStore from '../hooks/useStore.js';

export default function HomePage() {
	const allMeals = useStore(state => state.allMeals);

	return (
		<Layout>
			<Helmet>
				<title key="title">PlatePlan</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<CreateForm />
			<section>
				{allMeals.map(meal => {
					return <MealCard key={meal.id} id={meal.id} />;
				})}
			</section>
		</Layout>
	);
}

import {nanoid} from 'nanoid';
import {Helmet} from 'react-helmet';

import Layout from '../components/Layout/Layout.js';
import MealCard from '../components/MealCard/MealCard.js';

export default function HomePage() {
	const allMeals = [
		{
			id: nanoid(),
			title: 'Spaghetti Carbonara',
			category: 'Dinner',
		},
		{
			id: nanoid(),
			title: 'Blueberry Pancakes',
			category: 'Breakfast',
		},
		{
			id: nanoid(),
			title: 'Greek Salad',
			category: 'Lunch',
		},
		{
			id: nanoid(),
			title: 'Pea Soup',
			category: 'Lunch',
		},
		{
			id: nanoid(),
			title: 'Enchiladas',
			category: 'Dinner',
		},
		{
			id: nanoid(),
			title: 'Chocolate Porridge',
			category: 'Breakfast',
		},
	];

	return (
		<Layout>
			<Helmet>
				<title key="title">My Project</title>
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

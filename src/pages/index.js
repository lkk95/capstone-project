import {nanoid} from 'nanoid';
import {Helmet} from 'react-helmet';

import CreateForm from '../components/CreateForm/CreateForm.js';
import Layout from '../components/Layout';

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
				<title key="title">MealsByMe</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<h1>Your planned meals</h1>
			<section>
				{allMeals.map(meal => {
					return (
						<section key={meal.id}>
							<p>{meal.title}</p>
							<p>{meal.category}</p>
						</section>
					);
				})}
			</section>
			<hr />
			<CreateForm />
		</Layout>
	);
}

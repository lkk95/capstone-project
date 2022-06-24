import {nanoid} from 'nanoid';
import * as React from 'react';
import {useState} from 'react';
import {Helmet} from 'react-helmet';

import CreateForm from '../components/CreateForm/index.js';
import Layout from '../components/Layout/index.js';
import MealCard from '../components/MealCard/index.js';

export default function HomePage() {
	const [allMeals, setAllMeals] = useState([
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
	]);

	function addMeal(title, category) {
		const newMeals = [
			...allMeals,
			{
				id: nanoid(),
				title,
				category,
			},
		];
		setAllMeals(newMeals);
	}

	return (
		<Layout>
			<Helmet>
				<title key="title">MealsByMe</title>
				<meta key="description" name="description" content="This is my project" />
			</Helmet>
			<CreateForm addMeal={addMeal} />
			<section>
				<h2>Your planned meals</h2>
				{allMeals.map(meal => {
					return <MealCard key={meal.id} title={meal.title} category={meal.category} />;
				})}
			</section>
		</Layout>
	);
}

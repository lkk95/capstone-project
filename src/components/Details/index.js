import {nanoid} from 'nanoid';
import {useParams} from 'react-router-dom';

import useStore from '../../hooks/useStore.js';
import Button from '../Button/backbutton.js';

import StyledDetails from './styled.js';

export default function Details() {
	const allMeals = useStore(state => state.allMeals);

	const {idFromUrl} = useParams();

	const meal = allMeals.find(meal => meal.id === idFromUrl);

	return (
		<StyledDetails>
			<h1>{meal.title}</h1>
			<Button />
			<section clasName="ingredients">
				<h2>Ingredients</h2>
				<ul>
					{meal.ingredients.map(ingredient => {
						return <li key={nanoid()}>{ingredient}</li>;
					})}
				</ul>
			</section>
			<section>
				<h2>Preparation</h2>
				<p>{meal.preparation}</p>
			</section>
			<section>
				<h2>Servings</h2>
				<p>{meal.servings}</p>
			</section>
			<section>
				<h2>Cooking Time</h2>
				<p>{meal.time}</p>
			</section>
			<section>
				<h2>Category</h2>
				<p>{meal.category}</p>
			</section>
		</StyledDetails>
	);
}

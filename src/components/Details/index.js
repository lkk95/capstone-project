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
			<section>
				<h2>Ingredients</h2>
			</section>
			<section>
				<h2>Preparation</h2>
			</section>
			<section>
				<h2>Servings</h2>
			</section>
			<section>
				<h2>Cooking Time</h2>
			</section>
			<section>
				<h2>Category</h2>
				<p>{meal.category}</p>
			</section>
		</StyledDetails>
	);
}

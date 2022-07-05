import useStore from '../../hooks/useStore.js';
import CardButton from '../Button/cardbutton.js';

import MealCardContainer from './styled.js';

export default function MealCard({id}) {
	const allMeals = useStore(state => state.allMeals);
	const meal = allMeals.find(meal => meal.id === id);

	return (
		<MealCardContainer>
			<h2>{meal.title}</h2>
			<p>{meal.category}</p>
			<CardButton id={meal.id} />
		</MealCardContainer>
	);
}

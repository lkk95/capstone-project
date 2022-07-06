import {useNavigate} from 'react-router-dom';

import useStore from '../../hooks/useStore.js';
import Button from '../Button/Button.js';

import MealCardContainer from './styled.js';

export default function MealCard({id}) {
	const allMeals = useStore(state => state.allMeals);
	const meal = allMeals.find(meal => meal.id === id);

	const navigate = useNavigate();

	return (
		<MealCardContainer>
			<h2>{meal.title}</h2>
			<p>{meal.category}</p>
			<Button functionToClick={navigate} parameterToClick={'/' + id}>
				Details
			</Button>
		</MealCardContainer>
	);
}

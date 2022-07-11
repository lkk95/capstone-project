import {useNavigate} from 'react-router-dom';

import Button from '../Button/Button.js';

import MealCardContainer from './styled.js';

export default function MealCard({currentMeal}) {
	const navigate = useNavigate();

	return (
		<MealCardContainer>
			<h2>{currentMeal.title}</h2>
			<Button functionToClick={navigate} parameterToClick={'/' + currentMeal.id}>
				Details
			</Button>
		</MealCardContainer>
	);
}

import {useParams, useNavigate} from 'react-router-dom';

import useStore from '../../hooks/useStore.js';
import Button from '../Button/Button.js';

import StyledDetails from './styled.js';

export default function Details() {
	const allMeals = useStore(state => state.allMeals);
	const deleteMeal = useStore(state => state.deleteMeal);
	const setEditing = useStore(state => state.setEditing);
	const navigate = useNavigate();
	const {idFromUrl} = useParams();

	const meal = allMeals.find(meal => meal.id === idFromUrl);

	return (
		<StyledDetails>
			<h1>{meal.title}</h1>
			<Button closeModal functionToClick={navigate} parameterToClick="/planner">
				Go Back
			</Button>
			<div>
				<Button functionToClick={setEditing} parameterToClick={true} isIcon>
					<i className="fa-solid fa-pen"></i>
				</Button>
				<Button
					functionToClick={deleteMeal}
					parameterToClick={idFromUrl}
					closeModal
					buttonMode={'delete'}
					isIcon
				>
					<i className="fa-solid fa-trash"></i>
				</Button>
			</div>
			<section>
				<h2>Ingredients</h2>
				<ul>
					{meal.ingredients.map((ingredient, index) => {
						return <li key={index}>{ingredient}</li>;
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
		</StyledDetails>
	);
}

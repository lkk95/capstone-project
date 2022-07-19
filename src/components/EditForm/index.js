import {nanoid} from 'nanoid';
import {useState} from 'react';
import {useParams} from 'react-router-dom';

import useStore from '../../hooks/useStore.js';
import Button from '../Button/Button.js';
import Radio from '../EditForm/radio.js';
import StyledForm from '../EditForm/styledform.js';
import TextInput from '../EditForm/textinput.js';

import StyledButtons from './styledbuttons.js';

export default function EditForm() {
	const editMeal = useStore(state => state.editMeal);
	const allMeals = useStore(state => state.allMeals);
	const setEditing = useStore(state => state.setEditing);

	const {idFromUrl} = useParams();

	const meal = allMeals.find(meal => meal.id === idFromUrl);

	const [editedMeal, setEditedMeal] = useState({...meal});
	const setAllIngredients = useStore(state => state.setAllIngredients);
	const flatAllIngredients = useStore(state => state.flatAllIngredients);
	const [ingredients, setIngredients] = useState([...meal.ingredients]);
	const [currentIngredient, setCurrentIngredient] = useState([]);

	function ingredientsToObject() {
		const updatedIngredients = ingredients.map(ingredient => {
			return {id: nanoid(), name: ingredient, isChecked: false};
		});
		setAllIngredients(updatedIngredients);
	}

	const handleSubmit = event => {
		event.preventDefault();
		ingredientsToObject();
		flatAllIngredients();
		const meal = {...editedMeal, ingredients: ingredients};
		editMeal(meal, idFromUrl);
		setEditing(false);
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<TextInput
					editedMeal={editedMeal}
					setEditedMeal={setEditedMeal}
					currentIngredient={currentIngredient}
					onCurrentIngredientChange={event => setCurrentIngredient(event.target.value)}
					onIngredientsChange={() => setIngredients([...ingredients, currentIngredient])}
					ingredients={ingredients}
					resetHandler={() => setCurrentIngredient('')}
				/>
				<Radio editedMeal={editedMeal} setEditedMeal={setEditedMeal} />
				<StyledButtons>
					<Button buttonMode={'submit'}>Save</Button>
					<Button functionToClick={setEditing} parameterToClick={false}>
						Cancel
					</Button>
				</StyledButtons>
			</StyledForm>
		</>
	);
}

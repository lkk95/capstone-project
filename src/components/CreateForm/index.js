import {nanoid} from 'nanoid';
import {useState} from 'react';

import useStore from '../../hooks/useStore.js';
import Button from '../Button/Button.js';

import Radio from './radio.js';
import StyledForm from './styledform.js';
import TextInput from './textinput.js';

export default function CreateForm() {
	const addMeal = useStore(state => state.addMeal);
	const setAllIngredients = useStore(state => state.setAllIngredients);
	const flatAllIngredients = useStore(state => state.flatAllIngredients);
	const setShowModal = useStore(state => state.setShowModal);
	const [newMeal, setNewMeal] = useState({});
	const [ingredients, setIngredients] = useState([]);
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
		const meal = {...newMeal, ingredients: ingredients};
		addMeal(meal);
		setIngredients([]);
		setShowModal();
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<h2>Plan your next meal!</h2>
				<TextInput
					newMeal={newMeal}
					setNewMeal={setNewMeal}
					currentIngredient={currentIngredient}
					onCurrentIngredientChange={event => setCurrentIngredient(event.target.value)}
					onIngredientsChange={() => setIngredients([...ingredients, currentIngredient])}
					ingredients={ingredients}
				/>
				<Radio newMeal={newMeal} setNewMeal={setNewMeal} />
				<Button buttonMode={'submit'}>Add</Button>
			</StyledForm>
		</>
	);
}

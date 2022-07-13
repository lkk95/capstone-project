import {useState} from 'react';

import useStore from '../../hooks/useStore.js';
import Button from '../Button/Button.js';

import Radio from './radio.js';
import StyledForm from './styledform.js';
import TextInput from './textinput.js';

export default function CreateForm() {
	const addMeal = useStore(state => state.addMeal);
	const setAllIngredients = useStore(state => state.setAllIngredients);
	const [newMeal, setNewMeal] = useState({});
	const [ingredients, setIngredients] = useState([]);

	const handleSubmit = event => {
		event.preventDefault();
		setNewMeal({...newMeal, ingredients: ingredients});
		setAllIngredients(ingredients);
		addMeal(newMeal);
		setNewMeal({
			title: '',
			ingredients: '',
			preparation: '',
			servings: '',
			time: '',
		});
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<h2>Plan your next meal!</h2>
				<TextInput
					newMeal={newMeal}
					setNewMeal={setNewMeal}
					setIngredients={setIngredients}
					ingredients={ingredients}
				/>
				<Radio newMeal={newMeal} setNewMeal={setNewMeal} />
				<Button buttonMode={'submit'}>Add</Button>
			</StyledForm>
		</>
	);
}

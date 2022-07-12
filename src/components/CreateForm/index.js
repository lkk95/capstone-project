import {useState} from 'react';

import useStore from '../../hooks/useStore.js';
import Button from '../Button/Button.js';

import Radio from './radio.js';
import StyledForm from './styledform.js';
import TextInput from './textinput.js';

export default function CreateForm() {
	const [newMeal, setNewMeal] = useState({});
	const addMeal = useStore(state => state.addMeal);

	const handleSubmit = event => {
		event.preventDefault();
		addMeal(newMeal);
		setNewMeal({
			title: '',
			ingredients: '',
			preparation: '',
			servings: '',
			time: '',
			start: '',
		});
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<h2>Plan your next meal!</h2>
				<TextInput newMeal={newMeal} setNewMeal={setNewMeal} />
				<Radio newMeal={newMeal} setNewMeal={setNewMeal} />
				<Button buttonMode={'submit'} closeModal>
					Add
				</Button>
				<Button closeModal>Cancel</Button>
			</StyledForm>
		</>
	);
}

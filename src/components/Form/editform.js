import {useState} from 'react';

import useStore from '../../hooks/useStore.js';
import CancelButton from '../Button/cancelbutton.js';
import SaveButton from '../Button/savebutton.js';

import Radio from './radio.js';
import StyledForm from './styledform.js';
import TextInput from './textinput.js';

export default function Form() {
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
		});
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<h2>Plan your next meal!</h2>
				<TextInput newMeal={newMeal} setNewMeal={setNewMeal} />
				<Radio newMeal={newMeal} setNewMeal={setNewMeal} />
				<SaveButton type="submit" />
				<CancelButton />
			</StyledForm>
		</>
	);
}

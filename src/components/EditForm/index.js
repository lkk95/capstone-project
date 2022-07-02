import {useState} from 'react';
import {useParams} from 'react-router-dom';

import useStore from '../../hooks/useStore.js';
import CancelButton from '../Button/cancelbutton.js';
import SaveButton from '../Button/savebutton.js';
import Radio from '../EditForm/radio.js';
import StyledForm from '../EditForm/styledform.js';
import TextInput from '../EditForm/textinput.js';

export default function EditForm() {
	const addMeal = useStore(state => state.addMeal);
	const allMeals = useStore(state => state.allMeals);

	const [newMeal, setNewMeal] = useState({});
	const {idFromUrl} = useParams();

	const meal = allMeals.find(meal => meal.id === idFromUrl);

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
				<h2>Edit your meal!</h2>
				<TextInput meal={meal} />
				<Radio meal={meal} />
				<SaveButton type="submit" />
				<CancelButton />
			</StyledForm>
		</>
	);
}

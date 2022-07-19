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

	const handleSubmit = event => {
		event.preventDefault();
		editMeal(editedMeal, idFromUrl);
		setEditing(false);
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<TextInput editedMeal={editedMeal} setEditedMeal={setEditedMeal} />
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

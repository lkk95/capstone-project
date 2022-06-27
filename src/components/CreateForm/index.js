import {useState} from 'react';

import useStore from '../../hooks/useStore.js';
import Button from '../Button/formbutton.js';

import StyledForm from './styled.js';

export default function CreateForm() {
	const [newMeal, setNewMeal] = useState({});
	const addMeal = useStore(state => state.addMeal);

	const handleSubmit = event => {
		event.preventDefault();
		addMeal(newMeal);
		setNewMeal({title: ''});
	};

	return (
		<>
			<StyledForm onSubmit={handleSubmit}>
				<h2>Plan your next meal!</h2>
				<fieldset>
					<label htmlFor="title">Recipe Title:</label>
					<input
						type="text"
						name="title"
						id="title"
						value={newMeal.title}
						onChange={event => setNewMeal({...newMeal, title: event.target.value})}
						required
					/>
				</fieldset>
				<fieldset
					onChange={event => {
						setNewMeal({...newMeal, category: event.target.value});
					}}
				>
					<legend>Choose the category of your recipe:</legend>
					<input type="radio" name="category" id="breakfast" value="Breakfast" required />
					<label htmlFor="breakfast">Breakfast</label>
					<input type="radio" name="category" id="lunch" value="Lunch" />
					<label htmlFor="lunch">Lunch</label>
					<input type="radio" name="category" id="dinner" value="Dinner" />
					<label htmlFor="dinner">Dinner</label>
				</fieldset>
				<Button type="submit">Add</Button>
			</StyledForm>
		</>
	);
}

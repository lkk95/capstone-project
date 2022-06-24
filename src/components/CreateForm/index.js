import {useState} from 'react';

import Button from '../Button/index.js';

import FormContainer from './styled.js';

export default function CreateForm({addMeal}) {
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		addMeal(title, category);
		setTitle('');
	};

	return (
		<>
			<FormContainer onSubmit={handleSubmit}>
				<h2>Plan your next meal!</h2>
				<fieldset>
					<label htmlFor="title">Recipe Title:</label>
					<input
						type="text"
						name="title"
						id="title"
						onChange={event => setTitle(event.target.value)}
						required
					/>
				</fieldset>
				<fieldset onChange={event => setCategory(event.target.value)}>
					<legend>Choose the category of your recipe:</legend>
					<input type="radio" name="category" id="breakfast" value="Breakfast" required />
					<label htmlFor="breakfast">Breakfast</label>
					<input type="radio" name="category" id="lunch" value="Lunch" />
					<label htmlFor="lunch">Lunch</label>
					<input type="radio" name="category" id="dinner" value="Dinner" />
					<label htmlFor="dinner">Dinner</label>
				</fieldset>
				<Button type="submit">Add</Button>
			</FormContainer>
		</>
	);
}

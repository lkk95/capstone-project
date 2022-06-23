import {useState} from 'react';

import FormContainer from './styled.js';

export default function CreateForm({addMeal}) {
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		addMeal(title, category);
		setTitle('');
		setCategory('');
	};

	return (
		<>
			<FormContainer role="form" onSubmit={handleSubmit}>
				<label htmlFor="title">Recipe Title:</label>
				<input
					role="textbox"
					type="text"
					name="title"
					id="title"
					onChange={event => setTitle(event.target.value)}
					required
				/>
				<fieldset onChange={event => setCategory(event.target.value)}>
					<legend>Choose the category of your recipe:</legend>
					<input type="radio" name="category" id="breakfast" value="Breakfast" required />
					<label htmlFor="breakfast">Breakfast</label>
					<input type="radio" name="category" id="lunch" value="Lunch" />
					<label htmlFor="lunch">Lunch</label>
					<input type="radio" name="category" id="dinner" value="Dinner" />
					<label htmlFor="dinner">Dinner</label>
				</fieldset>
				<input type="submit" value="Add" />
			</FormContainer>
		</>
	);
}

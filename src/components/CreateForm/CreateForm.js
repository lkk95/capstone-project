import {useState} from 'react';

import FormContainer from './styled.js';

export default function CreateForm() {
	return (
		<>
			<FormContainer>
				<label htmlFor="title">Recipe Name:</label>
				<input type="text" name="title" id="title" />
				<fieldset>
					<legend>Choose the category of your recipe:</legend>
					<input type="radio" name="category" id="breakfast" value="breakfast" />
					<label htmlFor="breakfast">Breakfast</label>
					<input type="radio" name="category" id="lunch" value="lunch" />
					<label htmlFor="lunch">Lunch</label>
					<input type="radio" name="category" id="dinner" value="dinner" />
					<label htmlFor="dinner">Dinner</label>
				</fieldset>
				<input type="submit" value="Add" />
			</FormContainer>
		</>
	);
}

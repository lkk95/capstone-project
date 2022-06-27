import {useState} from 'react';

import useStore from '../../hooks/useStore.js';
import Button from '../Button/formbutton.js';

import FormContainer from './styled.js';

export default function CreateForm() {
	return (
		<>
			<FormContainer>
				<h2>Plan your next meal!</h2>
				<fieldset>
					<label htmlFor="title">Recipe Title:</label>
					<input type="text" name="title" id="title" required />
				</fieldset>
				<fieldset>
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

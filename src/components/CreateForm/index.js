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
				<fieldset className="inputfieldset">
					<label htmlFor="title">Recipe Title:</label>
					<input
						type="text"
						name="title"
						id="title"
						value={newMeal.title}
						placeholder="Summer Salad"
						onChange={event => setNewMeal({...newMeal, title: event.target.value})}
						required
					/>
					<label htmlFor="ingredients">Ingredients:</label>
					<textarea
						name="ingredients"
						id="ingredients"
						value={newMeal.ingredients}
						placeholder="1 cucumber, 2 carrots,..."
						onChange={event =>
							setNewMeal({...newMeal, ingredients: event.target.value.split(',')})
						}
						required
					/>
					<label htmlFor="preparation">Preparation:</label>
					<textarea
						name="preparation"
						id="preparation"
						value={newMeal.preparation}
						placeholder="Cut vegetables. Then..."
						onChange={event =>
							setNewMeal({...newMeal, preparation: event.target.value})
						}
						required
					/>
					<label htmlFor="servings">Servings:</label>
					<input
						type="number"
						name="servings"
						id="servings"
						value={newMeal.servings}
						placeholder="1"
						onChange={event => setNewMeal({...newMeal, servings: event.target.value})}
						required
					/>
					<label htmlFor="time">Cooking Time:</label>
					<input
						type="number"
						name="time"
						id="time"
						value={newMeal.time}
						placeholder="min"
						onChange={event => setNewMeal({...newMeal, time: event.target.value})}
					/>
				</fieldset>
				<fieldset
					className="radiofieldset"
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

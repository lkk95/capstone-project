import Button from '../Button/Button.js';

import StyledInput from './styledinput.js';
import StyledList from './styledlist.js';
import StyledTextInput from './styledtextinput.js';

export default function TextInput({
	newMeal,
	setNewMeal,
	currentIngredient,
	setCurrentIngredient,
	ingredients,
	setIngredients,
}) {
	return (
		<StyledTextInput>
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
			<StyledInput>
				<input
					type="text"
					name="ingredients"
					id="ingredients"
					value={currentIngredient}
					placeholder="1 cucumber"
					onChange={event => setCurrentIngredient(event.target.value)}
					required
				/>
				<Button
					isIcon
					modalIcon
					functionToClick={setIngredients}
					parameterToClick={[...ingredients, currentIngredient]}
				>
					<i className="fa-solid fa-circle-plus"></i>
				</Button>
			</StyledInput>
			<StyledList>
				{ingredients.map((ingredient, index) => {
					return <li key={index}>{ingredient}</li>;
				})}
			</StyledList>
			<label htmlFor="preparation">Preparation:</label>
			<textarea
				name="preparation"
				id="preparation"
				value={newMeal.preparation}
				placeholder="Cut vegetables. Then..."
				onChange={event => setNewMeal({...newMeal, preparation: event.target.value})}
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
			<label htmlFor="date">Pick a day for your meal:</label>
			<input
				type="date"
				name="date"
				id="date"
				value={newMeal.start}
				onChange={event => setNewMeal({...newMeal, start: event.target.value})}
				required
			/>
		</StyledTextInput>
	);
}

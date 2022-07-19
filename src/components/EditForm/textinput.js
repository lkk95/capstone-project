import Button from '../Button/Button.js';

import StyledInput from './styledinput.js';
import StyledList from './styledlist.js';
import StyledTextInput from './styledtextinput.js';

export default function TextInput({
	editedMeal,
	setEditedMeal,
	currentIngredient,
	onCurrentIngredientChange,
	ingredients,
	onIngredientsChange,
	resetHandler,
}) {
	return (
		<StyledTextInput>
			<label htmlFor="title">Recipe Title*</label>
			<input
				type="text"
				name="title"
				id="title"
				value={editedMeal.title}
				onChange={event => setEditedMeal({...editedMeal, title: event.target.value})}
				required
			/>
			<label htmlFor="ingredients">Ingredients*</label>
			<StyledInput>
				<input
					type="text"
					name="ingredients"
					id="ingredients"
					value={currentIngredient}
					onChange={onCurrentIngredientChange}
				/>
				<Button resetHandler={resetHandler} functionToClick={onIngredientsChange}>
					Add
				</Button>
			</StyledInput>
			<StyledList>
				{ingredients.map((ingredient, index) => {
					return <li key={index}>{ingredient}</li>;
				})}
			</StyledList>

			<label htmlFor="preparation">Preparation*</label>
			<textarea
				name="preparation"
				id="preparation"
				value={editedMeal.preparation}
				onChange={event => setEditedMeal({...editedMeal, preparation: event.target.value})}
				required
			/>
			<label htmlFor="servings">Servings</label>
			<input
				type="number"
				name="servings"
				id="servings"
				value={editedMeal.servings}
				onChange={event => setEditedMeal({...editedMeal, servings: event.target.value})}
			/>
			<label htmlFor="time">Cooking Time</label>
			<input
				type="number"
				name="time"
				id="time"
				value={editedMeal.time}
				onChange={event => setEditedMeal({...editedMeal, time: event.target.value})}
			/>
		</StyledTextInput>
	);
}

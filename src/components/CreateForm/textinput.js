import Button from '../Button/Button.js';

import StyledInput from './styledinput.js';
import StyledList from './styledlist.js';
import StyledTextInput from './styledtextinput.js';

export default function TextInput({
	newMeal,
	setNewMeal,
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
				value={newMeal.title}
				onChange={event => setNewMeal({...newMeal, title: event.target.value})}
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
				value={newMeal.preparation}
				onChange={event => setNewMeal({...newMeal, preparation: event.target.value})}
				required
			/>
			<label htmlFor="servings">Servings</label>
			<input
				type="number"
				name="servings"
				id="servings"
				value={newMeal.servings}
				onChange={event => setNewMeal({...newMeal, servings: event.target.value})}
			/>
			<label htmlFor="time">Cooking Time</label>
			<input
				type="number"
				name="time"
				id="time"
				value={newMeal.time}
				placeholder="min"
				onChange={event => setNewMeal({...newMeal, time: event.target.value})}
			/>
			<label htmlFor="date">Date*</label>
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

import StyledTextInput from './styledtextinput.js';

export default function TextInput({meal}) {
	return (
		<StyledTextInput>
			<label htmlFor="title">Recipe Title:</label>
			<input
				type="text"
				name="title"
				id="title"
				value={meal.title}
				onChange={event => {}}
				required
			/>
			<label htmlFor="ingredients">Ingredients:</label>
			<textarea
				name="ingredients"
				id="ingredients"
				value={meal.ingredients}
				onChange={event => {}}
				required
			/>
			<label htmlFor="preparation">Preparation:</label>
			<textarea
				name="preparation"
				id="preparation"
				value={meal.preparation}
				onChange={event => {}}
				required
			/>
			<label htmlFor="servings">Servings:</label>
			<input
				type="number"
				name="servings"
				id="servings"
				value={meal.servings}
				onChange={event => {}}
				required
			/>
			<label htmlFor="time">Cooking Time:</label>
			<input type="number" name="time" id="time" value={meal.time} onChange={event => {}} />
		</StyledTextInput>
	);
}

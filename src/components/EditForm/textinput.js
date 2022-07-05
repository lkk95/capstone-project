import StyledTextInput from './styledtextinput.js';

export default function TextInput({meal, editedMeal, setEditedMeal}) {
	return (
		<StyledTextInput>
			<label htmlFor="title">Recipe Title:</label>
			<input
				type="text"
				name="title"
				id="title"
				value={editedMeal.title}
				onChange={event => setEditedMeal({...editedMeal, title: event.target.value})}
				required
			/>
			<label htmlFor="ingredients">Ingredients:</label>
			<textarea
				name="ingredients"
				id="ingredients"
				value={editedMeal.ingredients}
				onChange={event => setEditedMeal({...editedMeal, ingredients: event.target.value})}
			/>
			<label htmlFor="preparation">Preparation:</label>
			<textarea
				name="preparation"
				id="preparation"
				value={editedMeal.preparation}
				onChange={event => setEditedMeal({...editedMeal, preparation: event.target.value})}
				required
			/>
			<label htmlFor="servings">Servings:</label>
			<input
				type="number"
				name="servings"
				id="servings"
				value={editedMeal.servings}
				onChange={event => setEditedMeal({...editedMeal, servings: event.target.value})}
				required
			/>
			<label htmlFor="time">Cooking Time:</label>
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

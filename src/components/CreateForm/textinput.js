import StyledTextInput from './styledtextinput.js';

export default function TextInput({newMeal, setNewMeal}) {
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
			<textarea
				name="ingredients"
				id="ingredients"
				value={newMeal.ingredients}
				placeholder="1 cucumber, 2 carrots,..."
				onChange={event => setNewMeal({...newMeal, ingredients: event.target.value})}
				required
			/>
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
		</StyledTextInput>
	);
}

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
				onChange={event => setNewMeal({...newMeal, title: event.target.value})}
				required
			/>
			<label htmlFor="ingredients">Ingredients:</label>
			<textarea
				name="ingredients"
				id="ingredients"
				value={newMeal.ingredients}
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
				onChange={event => setNewMeal({...newMeal, preparation: event.target.value})}
				required
			/>
			<label htmlFor="servings">Servings:</label>
			<input
				type="number"
				name="servings"
				id="servings"
				value={newMeal.servings}
				onChange={event => setNewMeal({...newMeal, servings: event.target.value})}
				required
			/>
			<label htmlFor="time">Cooking Time:</label>
			<input
				type="number"
				name="time"
				id="time"
				value={newMeal.time}
				onChange={event => setNewMeal({...newMeal, time: event.target.value})}
			/>
		</StyledTextInput>
	);
}

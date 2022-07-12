import StyledRadio from './styledradio.js';

export default function Radio({editedMeal, setEditedMeal}) {
	return (
		<>
			<StyledRadio
				onChange={event => setEditedMeal({...editedMeal, category: event.target.value})}
			>
				<legend>Choose the category of your recipe:</legend>
				<input type="radio" name="category" id="breakfast" value="Breakfast" required />
				<label htmlFor="breakfast">Breakfast</label>
				<input type="radio" name="category" id="lunch" value="Lunch" />
				<label htmlFor="lunch">Lunch</label>
				<input type="radio" name="category" id="dinner" value="Dinner" />
				<label htmlFor="dinner">Dinner</label>
			</StyledRadio>
			<StyledRadio
				onChange={event => {
					setEditedMeal({...editedMeal, color: event.target.value});
				}}
			>
				<legend>Choose the color of your recipe:</legend>
				<input type="radio" name="color" id="yellow" value="#FFD18F" required />
				<label htmlFor="yellow">Yellow</label>
				<input type="radio" name="color" id="orange" value="#EE8D4A" />
				<label htmlFor="orange">Orange</label>
				<input type="radio" name="color" id="green" value="#99A146" />
				<label htmlFor="green">Green</label>
			</StyledRadio>
		</>
	);
}

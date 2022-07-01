import StyledRadio from './styledradio.js';

export default function Radio({newMeal, setNewMeal}) {
	return (
		<StyledRadio
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
		</StyledRadio>
	);
}

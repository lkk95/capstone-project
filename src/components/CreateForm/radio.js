import StyledRadio from './styledradio.js';

export default function Radio({newMeal, setNewMeal}) {
	return (
		<>
			<StyledRadio
				onChange={event => {
					setNewMeal({...newMeal, category: event.target.value});
				}}
			>
				<legend>Time of Day*</legend>
				<input type="radio" name="category" id="breakfast" value="A - Breakfast" required />
				<label htmlFor="breakfast">Breakfast</label>
				<input type="radio" name="category" id="lunch" value="B - Lunch" />
				<label htmlFor="lunch">Lunch</label>
				<input type="radio" name="category" id="dinner" value="C - Dinner" />
				<label htmlFor="dinner">Dinner</label>
			</StyledRadio>
			<StyledRadio
				onChange={event => {
					setNewMeal({...newMeal, color: event.target.value});
				}}
			>
				<legend>Color*</legend>
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

import StyledImageUpload from './styledimageupload.js';

export default function ImageUpload({newMeal, setNewMeal}) {
	return (
		<StyledImageUpload>
			<label htmlFor="image">Image (only png or jpeg):</label>
			<input
				type="file"
				name="image"
				id="image"
				onChange={event => setNewMeal({...newMeal, image: event.target.files})}
			/>
		</StyledImageUpload>
	);
}

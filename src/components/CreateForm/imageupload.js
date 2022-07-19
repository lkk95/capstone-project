import {useEffect, useState} from 'react';

import Button from '../Button/Button.js';
import StyledButtons from '../EditForm/styledbuttons.js';

import StyledImageUpload from './styledimageupload.js';

export default function ImageUpload({handleClick}) {
	const [imageUrl, setImageUrl] = useState('');
	console.log(imageUrl);

	return (
		<StyledImageUpload>
			<label htmlFor="image">Image</label>
			<StyledButtons>
				<input
					type="file"
					name="image"
					id="image"
					accept="image/*"
					onChange={event => setImageUrl(URL.createObjectURL(event.target.files[0]))}
				/>
				<Button functionToClick={handleClick} parameterToClick={imageUrl}>
					Add
				</Button>
			</StyledButtons>
		</StyledImageUpload>
	);
}

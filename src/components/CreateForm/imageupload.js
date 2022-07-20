import {useEffect, useState} from 'react';

import Button from '../Button/Button.js';
import StyledButtons from '../EditForm/styledbuttons.js';

import StyledImageUpload from './styledimageupload.js';

export default function ImageUpload({newMeal, setNewMeal}) {
	return (
		<StyledImageUpload>
			<label htmlFor="image">Image</label>
			<StyledButtons>
				<input
					type="file"
					name="image"
					id="image"
					accept="image/*"
					onChange={event =>
						setNewMeal({...newMeal, image: URL.createObjectURL(event.target.files[0])})
					}
				/>
			</StyledButtons>
		</StyledImageUpload>
	);
}

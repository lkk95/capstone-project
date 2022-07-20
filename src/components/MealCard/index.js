import {useNavigate} from 'react-router-dom';

import Button from '../Button/Button.js';

import MealCardContainer from './styled.js';
import StyledInfo from './styledinfo.js';
import StyledTitle from './styledtitle.js';

export default function MealCard({currentMeal}) {
	const navigate = useNavigate();

	return (
		<MealCardContainer color={currentMeal.color}>
			<StyledInfo>
				<StyledTitle>{currentMeal.title}</StyledTitle>
				<Button
					buttonStyle={'cardbutton'}
					functionToClick={navigate}
					parameterToClick={'/' + currentMeal.id}
				>
					Details
				</Button>
			</StyledInfo>
		</MealCardContainer>
	);
}

import {useNavigate} from 'react-router-dom';

import Button from '../Button/Button.js';

import StyledContainer from './styledstart.js';

export default function StartContainer() {
	const navigate = useNavigate();

	return (
		<StyledContainer>
			<Button
				isIcon
				iconStyle={'homeicon'}
				functionToClick={navigate}
				parameterToClick={'/planner'}
			>
				<i className="fa-solid fa-circle-plus" />
			</Button>
			<p>Start by adding your first meal!</p>
		</StyledContainer>
	);
}

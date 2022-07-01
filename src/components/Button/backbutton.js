import {useNavigate} from 'react-router-dom';

import StyledButton from './styledbutton.js';

export default function BackButton() {
	const navigate = useNavigate();

	return <StyledButton onClick={() => navigate('/')}>Go Back</StyledButton>;
}

import {useNavigate} from 'react-router-dom';

import StyledButton from './styled.js';

export default function Button() {
	const navigate = useNavigate();

	return <StyledButton onClick={() => navigate('/')}>Go Back</StyledButton>;
}

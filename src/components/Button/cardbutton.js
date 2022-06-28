import {useNavigate} from 'react-router-dom';

import StyledButton from './styled.js';

export default function Button({id}) {
	const navigate = useNavigate();

	return <StyledButton onClick={() => navigate('/' + id)}>Details</StyledButton>;
}

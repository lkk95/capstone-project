import {useNavigate} from 'react-router-dom';

import StyledButton from './styledbutton.js';

export default function CardButton({id}) {
	const navigate = useNavigate();

	return <StyledButton onClick={() => navigate('/' + id)}>Details</StyledButton>;
}

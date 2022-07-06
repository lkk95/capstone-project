import {useNavigate} from 'react-router-dom';

import StyledIcon from './styledicon';

export default function IconButton({
	children,
	functionToClick,
	parameterToClick,
	buttonMode = 'default',
}) {
	const navigate = useNavigate();

	return (
		<StyledIcon
			onClick={() => {
				functionToClick(parameterToClick);
				buttonMode === 'delete' && navigate('/');
			}}
		>
			{children}
		</StyledIcon>
	);
}

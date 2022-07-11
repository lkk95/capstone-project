import {useNavigate} from 'react-router-dom';

import useStore from '../../hooks/useStore.js';

import StyledButton from './styledbutton.js';
import StyledIcon from './styledicon';

export default function Button({
	children,
	functionToClick,
	parameterToClick,
	buttonMode = 'default',
	isIcon,
}) {
	const setShowModal = useStore(state => state.setShowModal);
	const navigate = useNavigate();

	return (
		<>
			{isIcon ? (
				<StyledIcon
					onClick={() => {
						functionToClick(parameterToClick);
						buttonMode === 'delete' && navigate('/');
					}}
				>
					{children}
				</StyledIcon>
			) : (
				<StyledButton
					onClick={() => {
						buttonMode !== 'submit' && functionToClick(parameterToClick);
						buttonMode === 'goback' && setShowModal();
					}}
				>
					{children}
				</StyledButton>
			)}
		</>
	);
}
